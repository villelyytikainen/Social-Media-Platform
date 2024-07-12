const db = require("../database/userOperations");
const sessionOp = require("../database/sessionOperations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await db.getUserByUsername({ username });

        if (user.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ username }, process.env.SM_JWTTOKEN, { expiresIn: "1h" });
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 3600000
        })

        return res.status(200).json({ message: "User logged in" });
    } catch (error) {
        next(error);
    }
};

const createSession = async (req, res, next) => {
    try {
        sessionOp.createSession(req.body);
        res.json({ message: "session created" });
    } catch (error) {
        next(error);
    }
};

const logoutUser = (req, res, next) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "user logged out" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authenticateUser,
    createSession,
    logoutUser,
};
