const sql = require("mssql");
const connection = require("./dbConnection");

const getAllPosts = async () => {
    try {
        const pool = await connection();
        const result = await pool.request().query("SELECT * FROM user_post");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const getPostById = async (id) => {
    try {
        const pool = await connection();
        const result = await pool.request().input("id", sql.Int, id).query("SELECT * FROM user_post WHERE id = @id");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const createPost = async (post) => {
    try {
        const pool = await connection();
        const result = await pool
            .request()
            .input("user_id", sql.Int, post.user_id)
            .input("title", sql.Text, post.title)
            .input("content", sql.Text, post.content)
            .input("likes", sql.Int, post.likes)
            .input("created", sql.Date, post.created)
            .input("updated", sql.Date, post.updated)
            .query(
                `INSERT INTO user_post (user_id, title, written_text,likes, created_at, updated_at) VALUES (@user_id, @title, @content, @likes, @created, @updated)`
            );
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const updatePost = async(updatedPost) => {};

const deletePost = async(id) => {};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
