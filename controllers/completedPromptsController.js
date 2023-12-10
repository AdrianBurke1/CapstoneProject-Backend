const express = require("express");
const prompts = express.Router();
const { Pool } = require('pg');
const pool = new Pool(
PORT=5554,
PG_HOST=localhost,
PG_PORT=5432,
PG_DATABASE=signups_dev,
PG_USER=postgres
);

const completedPromptsController = {
  // Save a completed prompt for a user
  saveCompletedPrompt: async (req, res) => {
    const { id, prompts_id } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO completed_prompts (id, prompts_id) VALUES ($1, $2) RETURNING *',
        [id, prompts_id]
      );

      res.json({ success: true, completedPrompts: result.rows[0] });
    } catch (error) {
      console.error('Error saving completed prompt:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },

  // Get completed exercises for a user
  getCompletedPrompts: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await pool.query(
        'SELECT completion_id, completion_date, title, description, category' +
        'FROM completed_promts' +
        'JOIN prompts ON prompts_id = p.prompts_id ' +
        'WHERE user_id = $1',
        [id]
      );

      res.json({ success: true, completedPrompts: result.rows });
    } catch (error) {
      console.error('Error fetching completed exercises:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  },
};

module.exports = completedExerciseController;