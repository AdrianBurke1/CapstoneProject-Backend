const express = require("express");
const signups = express.Router();
const {
    getAllSignups,
    getSignup,
    createSignup,
    deleteSignup,
    updateSignup,
} = require("../queries/signups");

//INDEX
signups.get("/", async (req, res) => {
    const allSignups = await getAllSignups();
    if (allSignups[0]) {
      res.status(200).json(allSignups);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
  signups.get("/:id", async (req, res) => {
    const { id } = req.params;
    const signup = await getSignup(id);
    if (signup) {
      res.json(signup);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  // CREATE
  signups.post("/" ,async (req, res) => {
    try {
        console.log("this is the post req", req.body)
      const signup = await createSignup(req.body);
      res.json(signup);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

   //DELETE 
   signups.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedSignup = await deleteSignup(id);
    if (deletedSignup.id) {
      res.status(200).json(deletedSignup);
    } else {
      res.status(404).json("Signup not found");
    }
  });
// UPDATE
signups.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSignup = await updateSignup(id, req.body);
    res.status(200).json(updatedSignup);
  });

  module.exports = signups;
