CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  skills TEXT[],
  experience INT
);

CREATE TABLE jobs (
  id UUID PRIMARY KEY,
  title TEXT,
  company TEXT,
  location TEXT,
  apply_link TEXT
);

CREATE TABLE job_analysis (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  job_id UUID REFERENCES jobs(id),
  score INT,
  linkedin_message TEXT,
  email_message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
