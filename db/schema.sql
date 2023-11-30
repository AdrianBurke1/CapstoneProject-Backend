DROP DATABASE IF EXISTS signups_dev;
CREATE DATABASE signups_dev;

\c signups_dev;

-- CREATE TABLE signups (
--  id SERIAL PRIMARY KEY,
--  name TEXT NOT NULL,
--  username TEXT NOT NULL,
--  bio TEXT,
--  category TEXT
-- );


CREATE TABLE signups (
 id SERIAL PRIMARY KEY,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 email TEXT,
 password TEXT
);

DROP TABLE IF EXISTS prompts;
CREATE TABLE prompts (
id SERIAL PRIMARY KEY,
category TEXT NOT NULL,
prompt TEXT NOT NULL
);


DROP TABLE IF EXISTS roadmaps ;
CREATE TABLE roadmaps (
id SERIAL PRIMARY KEY,
starting_point TEXT NOT NULL,
destination TEXT NOT NULL,
goal TEXT NOT NULL
);
