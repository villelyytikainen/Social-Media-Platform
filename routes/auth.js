const authRouter = require("express").Router();
const { createUser } = require("../controllers/userController");
const {logoutUser, authenticateUser, checkAuth} = require("../controllers/authController");

authRouter.post("/register", createUser);
authRouter.post("/login", authenticateUser);
authRouter.post("/logout", logoutUser);
authRouter.get("/check-auth", checkAuth);

module.exports = authRouter;
