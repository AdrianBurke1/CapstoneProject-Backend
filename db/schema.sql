DROP DATABASE IF EXISTS signups_dev;
CREATE DATABASE signups_dev;

\c signups_dev;


CREATE TABLE signups (
 id SERIAL PRIMARY KEY,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 email TEXT,
 password TEXT
);

CREATE TABLE prompts (
id SERIAL PRIMARY KEY,
category TEXT NOT NULL,
prompt TEXT NOT NULL,
title VARCHAR(255) NOT NULL,
type TEXT NOT NULL,
response TEXT NOT NULL,
is_completed BOOLEAN DEFAULT false,
completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roadmaps (
id SERIAL PRIMARY KEY,
starting_point TEXT NOT NULL,
destination TEXT NOT NULL,
goal TEXT NOT NULL
);



-- CREATE TABLE completed_prompts (
--   completion_id SERIAL PRIMARY KEY,
--   id INT REFERENCES signups(id),
--   prompts_id INT REFERENCES prompts(id),
--   completion_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

DROP TABLE IF EXISTS posts ;
CREATE TABLE posts (
id SERIAL PRIMARY KEY,
description TEXT NOT NULL
);

