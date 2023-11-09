// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const promptsController = require("./controllers/promptsController.js");
app.use("/prompts", promptsController);
// ROUTES
app.get("/", (req, res) => {
  res.send("mindfulMe App");
});

app.get("*", (req,res) => {
  res.status(404).send("This is the Error Response")
})


// EXPORT
module.exports = app;