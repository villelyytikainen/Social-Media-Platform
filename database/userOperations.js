const sql = require("mssql");
const connection = require("./dbConnection");

const getAllUsers = async () => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .query("SELECT * FROM user_profile");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const getUserByUsername = async (user) => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .input("username", sql.VarChar, user.username)
        .query(`SELECT * FROM user_profile WHERE username = @username`);
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const getUserById = async (id) => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM user_profile WHERE id = @id");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};

const createUser = async (user) => {
    try {
        const pool = await connection();
        const result = await pool
            .request()
            .input("username", sql.NVarChar, user.username)
            .input("password", sql.Char, user.password)
            .input("created", sql.Date, user.created)
            .input("updated", sql.Date, user.updated)
            .query("INSERT INTO user_profile (username, password, created_at, updated_at) VALUES (@username, @password, @created, @updated)");
        return result.recordset;
    } catch (error) {
        console.error(error);
    }
};

const updateUser = async (updatedUser) => {
    try {
        const pool = await connection();
        const result = await pool
            .request()
            .input("username", sql.NVarChar, updatedUser.username)
            .input("password", sql.Char, updatedUser.password)
            .input("updated", sql.Date, updatedUser.updated)
            .query("UPDATE user_profile SET username = @username, password = @password, updated_at = @updated");
        return result.recordset;
    } catch (error) {
        console.error(error);
    }
};

const deleteUser = async (id) => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM user_profile WHERE id = @id");
        return result.recordset;
    } catch (error) {
        console.error(error);
        throw new Error(`Failed to delete user: ${error.message}`);
    }
};

module.exports = {
    getAllUsers,
    getUserByUsername,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
