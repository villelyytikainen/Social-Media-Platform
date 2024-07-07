const sql = require("mssql");
const connection = require("./dbConnection");

const getAllSessions = async () => {
    try {
        const pool = await connection();
        const result = await pool.request().query("SELECT * FROM sessions");
    } catch (error) {
        next(error);
    }
};

const getSessionById = async (id) => {
    try {
        const pool = await connection();
        const result = await pool;
    } catch (error) {
        next(error);
    }
};

const getSessionByUserId = async (user) => {
    try {
        const pool = await connection();
        const result = await pool;
    } catch (error) {
        next(error);
    }
};

const createSession = async (user) => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .input("userId", sql.Int, user.id)
        .input("expiry", sql.DateTime, user.expiry)
        .query("INSERT INTO sessions (user_id, expiry_date) VALUES (@userId, @expiry)");
    } catch (error) {
        console.log(error)
    }
};

const editSession = async (id) => {
    try {
        const pool = await connection();
        const result = await pool;
    } catch (error) {
        next(error);
    }
};

const deleteSession = async (id) => {
    try {
        const pool = await connection();
        const result = await pool;
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllSessions,
    getSessionById,
    getSessionByUserId,
    createSession,
    editSession,
    deleteSession,
};
