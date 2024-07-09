const postRouter = require("express").Router();
const {getAllPosts, getPostById, createPost} = require("../controllers/postController");

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);

module.exports = postRouter;