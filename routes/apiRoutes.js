const express = require("express");
const router = express.Router();
const { getUsers, getPosts } = require("../database/dbOperations");

router.get("/users", async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

router.get("/users/:id", async (req, res) => {
    const user = await getUser(req.params.id);
    res.json(user);
});

router.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.json(posts);
});

router.get("/posts/:id", async (req, res) => {
    const post = await getPost(req.params.id);
    res.json(post);
});

router.post("/posts", (request, response) => {
    const post = request.body
    console.log(post);
    response.status(201);
});

module.exports = router;
