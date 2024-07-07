const userRouter = require("express").Router();
const { getAllUsers, getUserById } = require("../controllers/userController");

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

module.exports = userRouter;
