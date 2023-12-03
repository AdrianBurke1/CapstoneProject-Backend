const express = require("express");
const roadmaps = express.Router();
const  {
    getAllRoadmaps,
    createRoadmap,
    getRoadmap,
    deleteRoadmap,
    updateRoadmap,
  } = require ("../queries/roadmaps");

  //INDEX
  roadmaps.get("/", async (req, res) => {
    const allRoadmaps = await getAllRoadmaps();
    if (allRoadmaps[0]) {
      res.status(200).json(allRoadmaps);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

 // SHOW
 roadmaps.get("/:id", async (req, res) => {
    const { id } = req.params;
    const roadmap = await getRoadmap(id);
    if (roadmap) {
      res.json(roadmap);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

 // CREATE
 roadmaps.post("/" ,async (req, res) => {
    try {
        console.log("this is the post req", req.body)
      const roadmap = await createRoadmap(req.body);
      res.json(roadmap);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

//DELETE 
roadmaps.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRoadmap = await deleteRoadmap(id);
    if (deletedRoadmap.id) {
      res.status(200).json(deletedRoadmap);
    } else {
      res.status(404).json("Roadmap not found");
    }
  });

// UPDATE
roadmaps.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedRoadmap = await updateRoadmap(id, req.body);
    res.status(200).json(updatedRoadmap);
  });

  module.exports = roadmaps;