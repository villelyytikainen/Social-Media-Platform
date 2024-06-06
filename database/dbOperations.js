const connection = require("./dbConnection");

const createUser = async (user) => {
    try {
        const pool = await connection();
        const result = await pool
            .request()
            .query(
                `INSERT INTO user_profile (username, password, created_at, updated_at) VALUES ('${user.username}', '${user.password}', '${user.created}', '${user.updated}')`
            );
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const updateUser = async (user) => {
    try {
        const result = await connection
            .request()
            .query(
                "UPDATE user_profile SET name = '" + user.name + "', email = '" + user.email + "', password = '" + user.password + "' WHERE id = " + user.id
            );
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    try {
        const result = await connection.request().query("DELETE FROM user_profile WHERE id = " + id);
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const getUser = async (user) => {
    try {
        const pool = await connection();
        const result = await pool.request().query(`SELECT * FROM user_profile WHERE username = '${user.username}'`);
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const getUsers = async () => {
    try {
        const pool = await connection();
        const result = await pool.request().query("SELECT * FROM user_profile");
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const getPosts = async () => {
    try {
        const pool = await connection();
        const result = await pool.request().query("SELECT * FROM user_post");
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
};

const createPost = async (post) => {
    try {
        const pool = await connection();
        const result = await pool
            .request()
            .query(
                `INSERT INTO user_post (user_id, title, written_text,likes, created_at, updated_at) VALUES ('${post.user_id}', '${post.title}', '${post.content}', '${post.likes}', '${post.created}', '${post.updated}')`
            );
        return result.recordset;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUsers, createUser, updateUser, deleteUser, getUser, getPosts, createPost };
