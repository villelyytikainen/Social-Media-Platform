const messageRouter = require("express").Router();
const { getAllMessages, getMessageById, createMessage, editMessage, deleteMessage } = require("../controllers/messageController");

messageRouter.get("/", getAllMessages);
messageRouter.get("/:id", getMessageById);
messageRouter.post("/", createMessage);
messageRouter.put("/:id", editMessage);
messageRouter.delete("/:id", deleteMessage);

export default messageRouter;
