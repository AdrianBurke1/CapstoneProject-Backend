const express = require("express");
const posts = express.Router();
const {
    getAllPosts,
    createPost,
    getPost,
    deletePost,
    updatePost,
} = require("../queries/posts");

//INDEX
posts.get("/", async (req, res) => {
    const allPosts = await getAllPosts();
    if (allPosts[0]) {
      res.status(200).json(allPosts);
    } else {
      res.status(500).json({ error: "server error" });
    }
  });

  // SHOW
  posts.get("/:id", async (req, res) => {
    const { id } = req.params;
    const post = await getPost(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "not found" });
    }
  });

  // CREATE
  posts.post("/" ,async (req, res) => {
    try {
        console.log("this is the post req", req.body)
      const post = await createPost(req.body);
      res.json(post);
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

   //DELETE 
   posts.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedPost = await deletePost(id);
    if (deletedPost.id) {
      res.status(200).json(deletedPost);
    } else {
      res.status(404).json("Post not found");
    }
  });
// UPDATE
posts.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedPost = await updatePost(id, req.body);
    res.status(200).json(updatedPost);
  });

  module.exports = posts;
