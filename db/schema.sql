DROP DATABASE IF EXISTS signups_dev;
CREATE DATABASE signups_dev;

\c signups_dev;

CREATE TABLE signups (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 username TEXT NOT NULL,
 bio TEXT,
 category TEXT
);

CREATE TABLE prompts (
id SERIAL PRIMARY KEY,
category TEXT NOT NULL,
prompt TEXT NOT NULL,
title VARCHAR(255) NOT NULL,
type TEXT NOT NULL
);

CREATE TABLE completed_prompts (
  completion_id SERIAL PRIMARY KEY,
  id INT REFERENCES signups(id),
  prompts_id INT REFERENCES prompts(id),
  completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
