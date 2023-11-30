const db = require("../db/dbConfig");

const getAllPrompts = async () => {
    try {
      const allPrompts = await db.any("SELECT * FROM prompts");
      return allPrompts;
    } catch (error) {
      return error;
    }
  };

  const getPrompt = async (id) => {
    try {
      const onePrompt = await db.one("SELECT * FROM prompts WHERE id=$1", id);
      return onePrompt;
    } catch (error) {
      return error;
    }
  };
  
  // CREATE
  const createPrompt = async (prompt) => {
    try {
      const newPrompt = await db.one(
        "INSERT INTO prompts (category, prompt) VALUES($1, $2) RETURNING *",
        [prompt.category, prompt.prompt]
      );
      return newPrompt;
    } catch (error) {
      return error;
    }
  };
  
  const deletePrompt = async (id) => {
    try {
      const deletedPrompt = await db.one(
        "DELETE FROM prompts WHERE id = $1 RETURNING *",
        id
      );
      return deletedPrompt;
    } catch (error) {
      return error;
    }
  };
  
  const updatePrompt = async (id, prompt) => {
    try {
      const updatedPrompt = await db.one(
        "UPDATE prompts SET category=$1, prompt=$2 WHERE id=$3 RETURNING *",
        [prompt.category, prompt.prompt, id]
      );
      return updatedPrompt;
    } catch (error) {
      return error;
    }
  };
  
  
  module.exports = { 
    getAllPrompts,
    createPrompt, 
    getPrompt,
    deletePrompt,
    updatePrompt
 };
