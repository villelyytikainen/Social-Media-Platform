const db = require("../database/userOperations");
const sessionOp = require("../database/sessionOperations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const [user] = await db.getUserByUsername({ username });
        const isPasswordValid = !user ? false : await bcrypt.compare(password, user.password);

        console.log(user)

        if (!(user && isPasswordValid)) {
            return res.status(401).json({
                message: "invalid username or password",
            });
        }

        const token = jwt.sign({ username }, process.env.SM_JWTTOKEN, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 3600000,
        });

        return res.status(200).json({ message: "User logged in", loggedIn: token ? true : false, user: {"id": user.id, "username": user.username}});
    } catch (error) {
        next(error);
    }
};

const checkAuth = async (req, res) => {
    const token = req.headers.cookie ? req.headers.cookie.split("=")[1] : null;

    if (!token) {
        return res.json({ loggedIn: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.SM_JWTTOKEN);
        return res.json({ loggedIn: (decoded ? true : false), user: decoded.username });
    } catch {
        return res.json({ loggedIn: false });
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
        res.status(200).json({ success: true, message: "user logged out", loggedIn: false });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    authenticateUser,
    checkAuth,
    createSession,
    logoutUser,
};

