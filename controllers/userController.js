const db = require("../database/userOperations");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await db.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await db.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password || username.length < 4 || password.length < 8) {
            return res.status(400).json({ message: "Bad Request" });
        }

        const hashedPassword = await bcrypt.hash(password, 10).then((hPass) => {
            return hPass;
        });

        const user = {
            username,
            password: hashedPassword,
            created: new Date().toISOString().slice(0, 10),
            updated: new Date().toISOString().slice(0, 10),
        };

        await db.createUser(user);
        res.status(201).json({ message: "User created" });
    } catch (error) {
        next(error);
    }
};

const authenticateUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await db.getUserByUsername({ username });

        if (!user.length) {
            return res.status(404).json({ message: "User not found" });
        }

        if (bcrypt.compareSync(password, user[0].password)) {
            const token = jwt.sign({ username }, process.env.SM_JWTTOKEN, { expiresIn: "1h" });
            res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "Strict" });
            return res.status(200).json({ message: "User logged in", token: token });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    authenticateUser,
};
