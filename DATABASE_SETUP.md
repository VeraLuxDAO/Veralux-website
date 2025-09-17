# Database Setup Instructions

## 1. Create a Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Sign up or log in to your account
3. Click "Create Project"
4. Choose a project name (e.g., "veralux-waitlist")
5. Select your preferred region
6. Click "Create Project"

## 2. Get Your Database Connection String

1. In your Neon dashboard, go to your project
2. Click on "Connection Details" or "Settings"
3. Copy the connection string that looks like:
   ```
   postgresql://username:password@host.neon.tech/database?sslmode=require
   ```

## 3. Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your database URL:
   ```
   DATABASE_URL=postgresql://your_username:your_password@your_host.neon.tech/your_database?sslmode=require
   ```

## 4. Database Schema

The application will automatically create the following table structure:

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  discord_username VARCHAR(255) NOT NULL,
  twitter_username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  wallet_address VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 5. Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to the waitlist page
3. Fill out the form and submit
4. Check your Neon database to see if the data was stored

## Security Notes

- The `email` field has a unique constraint to prevent duplicate entries
- All inputs are sanitized to prevent XSS attacks
- Wallet addresses are validated for common formats
- Timestamps are stored with timezone information for global users

## Troubleshooting

### Common Issues:

1. **"DATABASE_URL environment variable is not set"**

   - Make sure your `.env.local` file exists and contains the correct DATABASE_URL

2. **Connection timeout**

   - Check that your Neon database is active (not in sleep mode)
   - Verify your connection string is correct

3. **"duplicate key value violates unique constraint"**
   - This means the email is already in the waitlist
   - The API will return a proper error message for this case

### Database Management:

To view your data in Neon:

1. Go to your Neon console
2. Click on "SQL Editor"
3. Run queries like:
   ```sql
   SELECT * FROM waitlist ORDER BY created_at DESC;
   ```

To get statistics:

```sql
SELECT
  COUNT(*) as total_users,
  COUNT(CASE WHEN created_at >= NOW() - INTERVAL '24 hours' THEN 1 END) as users_last_24h
FROM waitlist;
```
