const db = require("../database/messageOperations");
//create message
const createMessage = (req,res,next) => {
    try {
        console.log(req.body.message)
        res.status(200).json({message: "message created"})
    } catch (error) {
        next(error);
    }
}

//get message
//get messages
//delete message
//delete messages

module.exports = {
    createMessage
}