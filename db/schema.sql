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

DROP TABLE IF EXISTS prompts;
CREATE TABLE prompts (
id SERIAL PRIMARY KEY,
category TEXT NOT NULL,
prompt TEXT NOT NULL
);
