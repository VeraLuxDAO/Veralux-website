import { neon } from "@neondatabase/serverless";

// Get the database URL from environment variables
const getDatabaseUrl = () => {
  // Only run on server side
  if (typeof window !== "undefined") {
    throw new Error(
      "Database operations can only be performed on the server side"
    );
  }

  let url =
    typeof process !== "undefined" ? process.env.DATABASE_URL : undefined;
  if (!url) {
    throw new Error(
      "DATABASE_URL environment variable is not set. Please add your Neon database URL to your .env.local file."
    );
  }

  // Clean up the URL in case there are extra characters
  url = url.trim();

  // Remove any 'sql' prefix that might be present
  if (url.startsWith("sql ")) {
    url = url.substring(4);
  }

  // Remove quotes if present
  url = url.replace(/^['"]|['"]$/g, "");

  return url;
};

// Create a connection to the database (only on server side)
let sql;
if (typeof window === "undefined") {
  sql = neon(getDatabaseUrl());
}

export { sql };

// Initialize the database schema
export async function initializeDatabase() {
  // Ensure this only runs on the server
  if (typeof window !== "undefined") {
    throw new Error(
      "Database initialization can only be performed on the server side"
    );
  }

  try {
    // Create the waitlist table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id SERIAL PRIMARY KEY,
        discord_username VARCHAR(255) NOT NULL,
        twitter_username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        wallet_address VARCHAR(255),
        wallet_creation_mode VARCHAR(20),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // Create an index on email for faster lookups
    await sql`
      CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
    `;

    // Create an index on created_at for time-based queries
    await sql`
      CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);
    `;

    console.log("Database initialized successfully");
    return true;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Function to add a user to the waitlist
export async function addToWaitlist(userData) {
  // Ensure this only runs on the server
  if (typeof window !== "undefined") {
    throw new Error(
      "Database operations can only be performed on the server side"
    );
  }

  try {
    const {
      discordUsername,
      twitterUsername,
      email,
      walletAddress,
      walletCreationMode,
    } = userData;

    // Validate required fields
    if (!discordUsername || !twitterUsername || !email) {
      throw new Error(
        "Discord username, Twitter username, and email are required"
      );
    }

    // Insert the user data with timezone-aware timestamp
    const result = await sql`
      INSERT INTO waitlist (discord_username, twitter_username, email, wallet_address, wallet_creation_mode)
      VALUES (${discordUsername}, ${twitterUsername}, ${email}, ${walletAddress}, ${walletCreationMode})
      RETURNING id, discord_username, twitter_username, email, wallet_address, wallet_creation_mode, created_at;
    `;

    return result[0];
  } catch (error) {
    // Handle duplicate email error
    if (
      error.message.includes("duplicate key value violates unique constraint")
    ) {
      throw new Error("This email is already registered in the waitlist");
    }

    console.error("Error adding to waitlist:", error);
    throw error;
  }
}

// Function to check if an email already exists in the waitlist
export async function checkEmailExists(email) {
  // Ensure this only runs on the server
  if (typeof window !== "undefined") {
    throw new Error(
      "Database operations can only be performed on the server side"
    );
  }

  try {
    const result = await sql`
      SELECT id FROM waitlist WHERE email = ${email} LIMIT 1;
    `;

    return result.length > 0;
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
}

// Function to get waitlist statistics
export async function getWaitlistStats() {
  // Ensure this only runs on the server
  if (typeof window !== "undefined") {
    throw new Error(
      "Database operations can only be performed on the server side"
    );
  }

  try {
    const result = await sql`
      SELECT 
        COUNT(*) as total_users,
        COUNT(CASE WHEN created_at >= NOW() - INTERVAL '24 hours' THEN 1 END) as users_last_24h,
        COUNT(CASE WHEN created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as users_last_week
      FROM waitlist;
    `;

    return result[0];
  } catch (error) {
    console.error("Error getting waitlist stats:", error);
    throw error;
  }
}
