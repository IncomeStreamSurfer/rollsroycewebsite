-- Create the contact_submissions table
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  date DATE,
  location TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  locale TEXT NOT NULL
);

-- Add indexes for better query performance
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_service ON contact_submissions(service);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX idx_contact_submissions_locale ON contact_submissions(locale);

-- Add a comment to the table
COMMENT ON TABLE contact_submissions IS 'Stores contact form submissions from the Rolls-Royce rental website';
