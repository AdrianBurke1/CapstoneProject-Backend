\c signups_dev;

INSERT INTO signups (first_name, last_name, email, password) VALUES
('Paola','Aracena','Pao@mindfulMe.com','aang123'),
('Leliah','Spruill','Leliah@mindfulMe.com','toph456'),
('Adrian','Burke','Adrian@mindfulMe.com','sokka789'),
('Arius','Phillips','Arius@mindfulMe.com','suko1011');

INSERT INTO prompts (category, prompt, title, type, response, is_completed, completion_date) VALUES
  ('Journaling','Write down three things you are grateful for today.','Gratitude Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Reflect on a challenging situation from the day and explore your emotions.','Reflective Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Write a letter to your future self, describing your aspirations and goals.','Future Self Journaling','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Set a timer for 10 minutes and write down your thoughts without any judgment.','Stream of Consciousness Writing','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Explore and write about your core values, beliefs, and identity.','Self-Discovery Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Create positive affirmations and write them down to reinforce a positive mindset.','Daily Affirmations','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Write a letter expressing gratitude to someone who has positively impacted your life.','Mindful Gratitude Letter','Social Connection', '', DEFAULT, DEFAULT),
  ('Journaling','Choose an object and write detailed observations about it, engaging all your senses.','Mindful Observation Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Write down any pent-up emotions and explore ways to release or cope with them.','Emotional Release Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Combine deep breathing exercises with reflective writing on your breath and its impact on your mood.','Mindful Breathing Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Describe your connection with nature and its influence on your well-being.','Nature Connection Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Record your thoughts and sensations after mindfully eating a meal.','Mindful Eating Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Set positive intentions for the day and reflect on them in the evening.','Daily Intentions Journaling','Personal Development', '', DEFAULT, DEFAULT), 
  ('Journaling','Write about a moment where you practiced mindful listening and its effects on your communication.','Mindful Listening Journaling','Social Connection', '', DEFAULT, DEFAULT),
  ('Journaling','After a body scan meditation, journal about the sensations and insights you experienced.','Body Scan Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Reflect on the impact of a day without digital devices on your mental state.','Digital Detox Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Engage in a creative activity and journal about the process and your feelings.','Creativity Exploration Journaling','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Take a mindful walk and document your observations and/or reflections in your journal.','Mindful Walk Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Track your dreams and explore any recurring themes or symbols.','Dream Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Identify and challenge any negative or limiting beliefs through writing.','Challenging Beliefs Journaling','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Express appreciation for the small things in life and document them in your journal.','Mindful Appreciation Journaling','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Reflect on your personal growth journey and the lessons you have learned.','Personal Growth Journaling','Personal Development', '', DEFAULT, DEFAULT),
  ('Journaling','Express appreciation for self with reflective writing on self-love.','Self-Love Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Examine your relationship with technology and its impact on your well-being.','Mindful Technology Use Journaling','Emotional Awareness', '', DEFAULT, DEFAULT),
  ('Journaling','Write about your experiences practicing mindfulness in your relationships, Reflect.','Mindful Relationships Journaling','Social Connection', '', DEFAULT, DEFAULT),
  ('Journaling','Reflect on your bedtime routine and sleep patterns for better sleep and overall health.','Mindful Sleep Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Reflect on the events of the day and identify moments of joy, challenge, and personal growth.','Daily Reflections Journaling','Learning and Growth', '', DEFAULT, DEFAULT),
  ('Journaling','Spend a few moments in silence and journal about your experience.','Mindful Silence Journaling','Emotional Awareness', '', DEFAULT, DEFAULT);


INSERT INTO prompts (category, prompt, title, type) VALUES
  ('Journaling','Write down three things you are grateful for today.','Gratitude Journaling','Emotional Awareness'),
  ('Journaling','Reflect on a challenging situation from the day and explore your emotions.','Reflective Journaling','Emotional Awareness'),
  ('Journaling','Write a letter to your future self, describing your aspirations and goals.','Future Self Journaling','Personal Development'),
  ('Journaling','Set a timer for 10 minutes and write down your thoughts without any judgment.','Stream of Consciousness Writing','Emotional Awareness'),
  ('Journaling','Explore and write about your core values, beliefs, and identity.','Self-Discovery Journaling','Learning and Growth'),
  ('Journaling','Create positive affirmations and write them down to reinforce a positive mindset.','Daily Affirmations','Personal Development'),
  ('Journaling','Write a letter expressing gratitude to someone who has positively impacted your life.','Mindful Gratitude Letter','Social Connection'),
  ('Journaling','Choose an object and write detailed observations about it, engaging all your senses.','Mindful Observation Journaling','Learning and Growth'),
  ('Journaling','Write down any pent-up emotions and explore ways to release or cope with them.','Emotional Release Journaling','Emotional Awareness'),
  ('Journaling','Combine deep breathing exercises with reflective writing on your breath and its impact on your mood.','Mindful Breathing Journaling','Emotional Awareness'),
  ('Journaling','Describe your connection with nature and its influence on your well-being.','Nature Connection Journaling','Emotional Awareness'),
  ('Journaling','Record your thoughts and sensations after mindfully eating a meal.','Mindful Eating Journaling','Emotional Awareness'),
  ('Journaling','Set positive intentions for the day and reflect on them in the evening.','Daily Intentions Journaling','Personal Development'),
  ('Journaling','Write about a moment where you practiced mindful listening and its effects on your communication.','Mindful Listening Journaling','Social Connection'),
  ('Journaling','After a body scan meditation, journal about the sensations and insights you experienced.','Body Scan Journaling','Learning and Growth'),
  ('Journaling','Reflect on the impact of a day without digital devices on your mental state.','Digital Detox Journaling','Learning and Growth'),
  ('Journaling','Engage in a creative activity and journal about the process and your feelings.','Creativity Exploration Journaling','Personal Development'),
  ('Journaling','Take a mindful walk and document your observations and/or reflections in your journal.','Mindful Walk Journaling','Learning and Growth'),
  ('Journaling','Track your dreams and explore any recurring themes or symbols.','Dream Journaling','Emotional Awareness'),
  ('Journaling','Identify and challenge any negative or limiting beliefs through writing.','Challenging Beliefs Journaling','Personal Development'),
  ('Journaling','Express appreciation for the small things in life and document them in your journal.','Mindful Appreciation Journaling','Personal Development'),
  ('Journaling','Reflect on your personal growth journey and the lessons you have learned.','Personal Growth Journaling','Personal Development'),
  ('Journaling','Express appreciation for self with reflective writing on self-love.','Self-Love Journaling','Emotional Awareness'),
  ('Journaling','Examine your relationship with technology and its impact on your well-being.','Mindful Technology Use Journaling','Emotional Awareness'),
  ('Journaling','Write about your experiences practicing mindfulness in your relationships, Reflect.','Mindful Relationships Journaling','Social Connection'),
  ('Journaling','Reflect on your bedtime routine and sleep patterns for better sleep and overall health.','Mindful Sleep Journaling','Learning and Growth'),
  ('Journaling','Reflect on the events of the day and identify moments of joy, challenge, and personal growth.','Daily Reflections Journaling','Learning and Growth'),
  ('Journaling','Spend a few moments in silence and journal about your experience.','Mindful Silence Journaling','Emotional Awareness');


INSERT INTO roadmaps (starting_point, destination, goal ) VALUES
('come up with an idea','complete capstone','create wireframe'),
('find your passion','get a new job', 'make a resume');


INSERT INTO posts (description ) VALUES
('I took a break from my hectic schedule today to explore something I have always been curious about – photography. I borrowed a Adeles camera and wandered around campus capturing moments that caught my eye. It was refreshing to step away from the textbooks and embrace a creative outlet. 12/30/2024, 9:23:14 PM      '),
('Today was a whirlwind of emotions and deadlines. College life is no joke. Balancing classes, assignments, and a part-time job is challenging, but I know it is a crucial part of my growth journey. I can feel the stress creeping in, but I also sense an opportunity for self-discovery. Maybe this chaos is the catalyst for finding balance and unlocking my true potential. I tried a new technique today to manage my time – breaking down tasks into smaller, manageable chunks. It helped, but there is  still room for improvement. Tomorrow is a new day, and I am determined to make it count. Here is to finding balance in the chaos.  1/2/2024, 8:47:25 AM
');
