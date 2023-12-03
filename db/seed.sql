\c signups_dev;

-- INSERT INTO signups (name, username, bio, category) VALUES
-- ('Paola','PaoAracena','this is my bio','learning and growth'),
-- ('Leliah','LeliahS','bio bio','Personal Development'),
-- ('Adrian','AdrianB','Adrians bio','Emotional Awareness'),
-- ('Arius','AriusP','Arius bio','Social Connection');


INSERT INTO signups (first_name, last_name, email, password) VALUES
('Paola','Aracena','Pao@mindfulMe.com','aang123'),
('Leliah','Spruill','Leliah@mindfulMe.com','toph456'),
('Adrian','Burke','Adrian@mindfulMe.com','sokka789'),
('Arius','Phillips','Arius@mindfulMe.com','suko1011');



INSERT INTO prompts (category, prompt) VALUES
('learning and growth','prompt'),
('Personal Development','prompt'),
('Emotional Awareness','prompt'),
('Social Connection','prompt');



INSERT INTO roadmaps (starting_point, destination, goal ) VALUES
('come up with an idea','complete capstone','create wireframe'),
('find your passion','get a new job', 'make a resume');