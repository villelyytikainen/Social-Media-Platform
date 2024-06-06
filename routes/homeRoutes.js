const express = require("express");
const router = express.Router();
const path = require("path");
const { createUser, getUser } = require("../database/dbOperations");
const bcrypt = require("bcrypt");

router.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/public", "index.html"));
});

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password || username.length < 4 || password.length < 8) {
        return res.status(400).json({ message: "Bad Request" });
    }

    const hashedPassword = await bcrypt.hash(password, 10).then((hPass) => {
        return hPass;
    });

    console.log(hashedPassword);

    const user = {
        username,
        password: hashedPassword,
        created: new Date().toISOString().slice(0, 10),
        updated: new Date().toISOString().slice(0, 10),
    };

    try {
        await createUser(user);
        res.json({ message: "User created" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await getUser({ username });

        if (!user.length) {
            return res.status(404).json({ message: "User not found" });
        }

        if (bcrypt.compareSync(password, user[0].password)) {
            return res.status(200).json({ message: "User logged in", token: "token" });
        } else {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
