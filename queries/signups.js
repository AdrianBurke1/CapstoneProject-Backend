const db = require("../db/dbConfig");

const getAllSignups = async () => {
    try {
      const allsignups = await db.any("SELECT * FROM signups");
      return allsignups;
    } catch (error) {
      return error;
    }
  };
// ONE USER 
const getSignup = async (id) => {
  console.log(getSignup)
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
      const newSignup = await db.one(
        "INSERT INTO signups (first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *",
        [signup.first_name, signup.last_name, signup.email, signup.password]
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
//UPDATE 
const updateSignup = async (id, signup) => {
    try {
      const updatedSignup = await db.one(
        "UPDATE games SET first_name=$1, last_name=$2, email=$3, password=$4 where id=$6 RETURNING *",
         [signup.first_name, signup.last_name, signup.email, signup.password,id]
      );
      return updatedSignup;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllSignups,
    createSignup,
    getSignup,
    deleteSignup,
    updateSignup,
  };