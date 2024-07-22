const db = require("../database/postOperations");
const { getUserById, getUserByUsername } = require("../database/userOperations");

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await db.getAllPosts();
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
        const { username } = req.user;
        const { title, content } = req.body;

        const [user] = await getUserByUsername({ username });

        if (!user) {
            return res.status(404).json({ message: "not user found" });
        }

        const newPost = {
            user_id: user.id,
            title: title,
            content: content,
            likes: 0,
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
        };

        const post = await db.createPost(newPost);
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
