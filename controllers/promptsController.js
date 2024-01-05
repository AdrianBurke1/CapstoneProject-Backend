const express = require("express");
const prompts = express.Router();
const {
  getAllPrompts,
  createPrompt,
  getPrompt, 
  deletePrompt,
  updatePrompt,
} = require("../queries/prompts");

prompts.get("/", async (req, res) => {
  const allPrompts = await getAllPrompts();
  console.log(allPrompts)
  if (allPrompts[0]) {
    res.status(200).json(allPrompts);
  } else {
    res.status(500).json({ error: "server error" });
  } 
});

// SHOW
prompts.get("/:id", async (req, res) => {
  const { id } = req.params;
  const prompt = await getPrompt(id);
  if (prompt) {
    res.json(prompt);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
prompts.post("/", async (req, res) => {
  try {
    const prompt = await createPrompt(req.body);
    res.json(prompt);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//Delete
prompts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPrompt = await deletePrompt(id);
  if (deletedPrompt.id) {
    res.status(200).json(deletedPrompt);
  } else {
    res.status(404).json("prompt not found");
  }
});

// UPDATE
prompts.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedPrompt = await updatePrompt(id, req.body);
  res.status(200).json(updatedPrompt);
  console.log("Updated prompt:", updatedPrompt);
});

module.exports = prompts;