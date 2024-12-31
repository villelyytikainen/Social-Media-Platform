const sql = require("mssql");
const connection = require("./dbConnection");

//create message
const createMessage = async (message) => {
    try {
        const pool = await connection();
        const result = await pool
        .request()
        .input("message_id",sql.Int,  message.message_id)
    } catch (error) {
        throw new Error(error)
    }
};
//get message
const getMessagById = async (id) => {};

// get messages
const getMessages = async () => {};

//delete messages
const deleteMessage = async (id) => {};
