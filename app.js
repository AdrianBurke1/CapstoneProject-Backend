// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

//Signup Routes 
const signupsController =  require("./controllers/signupControllers");
app.use("/signups", signupsController);

//Roadmap Routes  
const roadmapController =  require("./controllers/roadmapController");
app.use("/roadmaps", roadmapController);

const promptsController = require("./controllers/promptsController.js");
app.use("/prompts", promptsController);

const postsController = require("./controllers/postsController");
app.use("/posts", postsController);

// ROUTES
app.get("/", (req, res) => {
  res.send(" MindfulMe App <3");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});



// EXPORT
module.exports = app;