const db = require("../database/userOperations");
const sessionOp = require("../database/sessionOperations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await db.getUserByUsername({ username });

        if (!user.length) {
            return res.status(404).json({ message: "User not found" });
        }

        if (bcrypt.compareSync(password, user[0].password)) {
            const token = jwt.sign({ username }, process.env.SM_JWTTOKEN, { expiresIn: "1h" });
            res.cookie("token", token);
            return res.status(200).json({ message: "User logged in", token: token });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        next(error);
    }
};

const createSession = async (req, res, next) => {
    try {
        sessionOp.createSession(req.body);
        res.json({"message": "session created"})
    } catch (error) {
        next(error);
    }
};

const logoutUser = (req, res, next) => {
    try {
        console.log("logout")
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authenticateUser,
    createSession,
    logoutUser,
};
