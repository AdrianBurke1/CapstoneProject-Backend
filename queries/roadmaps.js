const db = require("../db/dbConfig");


const getAllRoadmaps = async () => {
    try {
      const allroadmaps = await db.any("SELECT * FROM roadmaps");
      return allroadmaps;
    } catch (error) {
      return error;
    }
  };

  // ONE "Roadmap"
const getRoadmap = async (id) => {
      try {
        const oneRoadmap = await db.one("SELECT * FROM roadmaps WHERE id=$1", id);
        return oneRoadmap;
      } catch (error) {
        return error;
      }
    };

 // CREATE -> POST
 const createRoadmap = async (roadmap) => {
    try {
      const newRoadmap = await db.one(
        "INSERT INTO roadmaps (starting_point, destination, goal ) VALUES($1, $2, $3) RETURNING *",
        [roadmap.starting_point, roadmap.destination, roadmap.goal]
      );
      return newRoadmap;
    } catch (error) {
      return error;
    }
  };
//DELETE
const deleteRoadmap= async (id) => {
    try {
      const deletedRoadmap = await db.one(
        "DELETE FROM roadmaps WHERE id = $1 RETURNING *",
        id
      );
      return deletedRoadmap;
    } catch (error) {
      return error;
    }
  }; 

  
//UPDATE 
const updateRoadmap = async (id, roadmap) => {
    try {
      const updatedRoadmap = await db.one(
        "UPDATE games SET starting_point=$1, destination=$2, goal=$3 where id=$4 RETURNING *",
        [roadmap.starting_point, roadmap.destination, roadmap.goal,id]
      );
      return updatedRoadmap;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllRoadmaps,
    createRoadmap,
    getRoadmap,
    deleteRoadmap,
    updateRoadmap,
  };