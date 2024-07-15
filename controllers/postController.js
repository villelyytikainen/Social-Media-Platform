const db = require("../database/postOperations");

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await db.getAllPosts();
        console.log(posts)
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    try {
        const post = await db.getPostById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
};

const createPost = async (req, res, next) => {
    try {
        const post = await db.createPost();
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
