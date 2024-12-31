const postRouter = require("express").Router();
const {getAllPosts, getPostById, createPost, deletePost} = require("../controllers/postController");

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;