const db = require("../db/dbConfig");

const getAllsignups = async () => {
    try {
      const allsignups = await db.any("SELECT * FROM signups");
      return allsignups;
    } catch (error) {
      return error;
    }
  };
// ONE USER 
const getSignup = async (id) => {
    try {
      const oneSignup = await db.one("SELECT * FROM signups WHERE id=$1", id);
      return oneSignup;
    } catch (error) {
      return error;
    }
  };

  // CREATE -> POST
  const createSignup = async (signup) => {
    try {
        console.log("this is the user", signup)
      const newSignup = await db.one(
        "INSERT INTO signups (name, username, bio,category) VALUES($1, $2, $3, $4) RETURNING *",
        [signup.name, signup.username, signup.bio, signup.category]
      );
      return newSignup;
    } catch (error) {
      return error;
    }
  };

 //DELETE
 const deleteSignup = async (id) => {
    try {
      const deletedSignup = await db.one(
        "DELETE FROM signups WHERE id = $1 RETURNING *",
        id
      );
      return deletedSignup;
    } catch (error) {
      return error;
    }
  }; 


  module.exports = {
    getAllsignups,
    getSignup,
    createSignup,
    deleteSignup,
  };