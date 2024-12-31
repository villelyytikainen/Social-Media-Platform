const db = require("../database/userOperations");
const bcrypt = require("bcrypt");

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

const deleteUser = async (req, res, next) => {
    try {
        const { user_id } = req.body;
        const deletedUser = db.deleteUser(user_id)
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};
