const authRouter = require("express").Router();
const { createUser } = require("../controllers/userController");
const {logoutUser, authenticateUser, createSession} = require("../controllers/authController");

authRouter.post("/register", createUser);
authRouter.post("/login", authenticateUser);
authRouter.post("/logout", logoutUser);

authRouter.post("/test", createSession);

module.exports = authRouter;
