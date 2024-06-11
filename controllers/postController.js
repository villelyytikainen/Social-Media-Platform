const db = require("../database/postOperations");

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await db.getAllPosts();
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await getPost(req.params.id);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

const createPost = (req, res, next) => {
    try {
        const post = req.body;
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
};
