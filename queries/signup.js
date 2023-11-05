const db = require("../db/dbConfig");

const getAllsignups = async () => {
    try {
      const allsignups = await db.any("SELECT * FROM signups");
      return allsignups;
    } catch (error) {
      return error;
    }
  };



  module.exports = {
    getAllsignups,
   
  };