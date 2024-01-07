const db = require("../db/dbConfig");

const getAllPosts = async () => {
    try {
      const allPosts = await db.any("SELECT * FROM posts");
      return allPosts;
    } catch (error) {
      return error;
    }
  };
// ONE USER 
const getPost = async (id) => {
  console.log(getPost)
    try {
      const onePost = await db.one("SELECT * FROM posts WHERE id=$1", id);
      return onePost;
    } catch (error) {
      return error;
    }
  };

  // CREATE -> POST
  const createPost = async (post) => {
    try {
      const newPost = await db.one(
        "INSERT INTO posts (description) VALUES($1) RETURNING *",
        [post.description]
      );
      return newPost;
    } catch (error) {
      return error;
    }
  };

 //DELETE
 const deletePost = async (id) => {
    try {
      const deletedPost = await db.one(
        "DELETE FROM posts WHERE id = $1 RETURNING *",
        id
      );
      return deletedPost;
    } catch (error) {
      return error;
    }
  }; 
//UPDATE 
const updatePost = async (id, post) => {
    try {
      const updatedPost = await db.one(
        "UPDATE games SET first_name=$1 where id=$2 RETURNING *",
         [post.description,id]
      );
      return updatedPost;
    } catch (error) {
      return error;
    }
  };

  module.exports = {
    getAllPosts,
    createPost,
    getPost,
    deletePost,
    updatePost,
  };