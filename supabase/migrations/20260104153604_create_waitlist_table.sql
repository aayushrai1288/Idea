/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique, not null) - Email address of the user joining the waitlist
      - `name` (text) - Optional name of the user
      - `created_at` (timestamptz) - Timestamp when the user joined the waitlist
      - `user_type` (text) - Type of user (student, professional, educator, other)
      - `source` (text) - Where the user came from (hero, cta, etc.)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert their own data
    - Add policy for authenticated users to read waitlist data (for admin purposes)

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for analytics

  4. Important Notes
    - Email addresses are unique to prevent duplicate signups
    - Anonymous users can only insert, not read
    - This table is designed for public waitlist signups
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  user_type text DEFAULT 'student',
  source text DEFAULT 'general'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
