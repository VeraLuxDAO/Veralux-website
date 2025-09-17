import { NextResponse } from "next/server";
import {
  addToWaitlist,
  checkEmailExists,
  initializeDatabase,
} from "../../../lib/db.js";

// Initialize database on first request
let dbInitialized = false;

async function ensureDbInitialized() {
  if (!dbInitialized) {
    try {
      await initializeDatabase();
      dbInitialized = true;
    } catch (error) {
      console.error("Failed to initialize database:", error);
      throw error;
    }
  }
}

// Validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateWalletAddress(address) {
  // Basic validation for common wallet address formats
  // Ethereum addresses (0x followed by 40 hex characters)
  const ethRegex = /^0x[a-fA-F0-9]{40}$/;
  // Bitcoin addresses (various formats)
  const btcRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$|^bc1[a-z0-9]{39,59}$/;

  return (
    ethRegex.test(address) || btcRegex.test(address) || address.length >= 26
  );
}

function sanitizeInput(input) {
  if (typeof input !== "string") return "";
  return input.trim().replace(/[<>]/g, ""); // Basic XSS prevention
}

export async function POST(request) {
  try {
    // Ensure database is initialized
    await ensureDbInitialized();

    // Parse the request body
    const body = await request.json();

    // Extract and sanitize data
    const discordUsername = sanitizeInput(body.discordUsername);
    const twitterUsername = sanitizeInput(body.twitterUsername);
    const email = sanitizeInput(body.email?.toLowerCase());
    const walletAddress = sanitizeInput(body.walletAddress);

    // Validate required fields
    if (!discordUsername || !twitterUsername || !email || !walletAddress) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
          details: {
            discordUsername: !discordUsername
              ? "Discord username is required"
              : null,
            twitterUsername: !twitterUsername
              ? "Twitter username is required"
              : null,
            email: !email ? "Email is required" : null,
            walletAddress: !walletAddress ? "Wallet address is required" : null,
          },
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Validate wallet address format
    if (!validateWalletAddress(walletAddress)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid wallet address format",
        },
        { status: 400 }
      );
    }

    // Validate username lengths
    if (discordUsername.length > 32) {
      return NextResponse.json(
        {
          success: false,
          error: "Discord username is too long (max 32 characters)",
        },
        { status: 400 }
      );
    }

    if (twitterUsername.length > 15) {
      return NextResponse.json(
        {
          success: false,
          error: "Twitter username is too long (max 15 characters)",
        },
        { status: 400 }
      );
    }

    // Check if email already exists
    const emailExists = await checkEmailExists(email);
    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already registered in the waitlist",
        },
        { status: 409 }
      );
    }

    // Add user to waitlist
    const userData = {
      discordUsername,
      twitterUsername,
      email,
      walletAddress,
    };

    const result = await addToWaitlist(userData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist!",
        data: {
          id: result.id,
          discordUsername: result.discord_username,
          twitterUsername: result.twitter_username,
          email: result.email,
          walletAddress: result.wallet_address,
          createdAt: result.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API Error:", error);

    // Handle specific database errors
    if (error.message.includes("This email is already registered")) {
      return NextResponse.json(
        {
          success: false,
          error: error.message,
        },
        { status: 409 }
      );
    }

    if (error.message.includes("DATABASE_URL")) {
      return NextResponse.json(
        {
          success: false,
          error: "Database configuration error. Please contact support.",
        },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle GET requests to check API status
export async function GET() {
  try {
    await ensureDbInitialized();

    return NextResponse.json(
      {
        success: true,
        message: "Waitlist API is running",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Database connection failed",
      },
      { status: 500 }
    );
  }
}
