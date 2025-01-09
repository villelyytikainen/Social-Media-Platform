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

        console.log(pool);

        const result = await pool
        .request()
        .input("username", sql.NVarChar, user.username)
        .query(`SELECT * FROM user_profile WHERE username = @username`);
        console.log(result.recordset)
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
        .query("SELECT * FROM user_profile WHERE user_id = @id");
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
            .input("password", sql.NVarChar, user.password)
            //.input("created", sql.Date, default)
            //.input("updated", sql.Date, user.updated)
            .input("settings", sql.NVarChar, "{}")
            .input("role", sql.NVarChar, "user")
            .query("INSERT INTO user_profile (username, password, settings, role) VALUES (@username, @password, @settings, @role)");
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
            .input("password", sql.NVarChar, updatedUser.password)
            .input("")
            .input("updated", sql.Date, updatedUser.updated)
            .query("UPDATE user_profile SET username = @username, password = @password, updated = @updated");
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
        .query("DELETE FROM user_profile WHERE user_id = @id");
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
