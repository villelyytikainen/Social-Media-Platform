const homeRouter = require("express").Router();
const path = require("path");
const { createUser, authenticateUser } = require("../controllers/userController");

homeRouter.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/public", "index.html"));
});

homeRouter.post("/register", createUser);
homeRouter.post("/login", authenticateUser);

module.exports = homeRouter;
