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
        const result = await pool.request().input("id", sql.Int, id).query("SELECT * FROM user_post WHERE post_id = @id");
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
            .input("content", sql.Text, post.content)
            .input("visibility", sql.NVarChar, "public")
            .input("created", sql.Date, post.created)
            .input("updated", sql.Date, post.updated)
            .query(`INSERT INTO user_post (user_id, post_content, visibility, created, updated) VALUES (@user_id, @content, @visibility, @created, @updated)`);
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const updatePost = async (updatedPost) => {};

const deletePost = async (id) => {
    const pool = await connection();
    const result = await pool
    .request()
    .input("post_id", sql.Int, post.post_id)
    .query(`DELETE FROM user_post WHERE user_id = @user_id`);
    return result.recordset;
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};
