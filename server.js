const express = require("express");
const app = express();
const path = require("path");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const authenticateToken = require("./middlewares/authMiddleware");

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/public")));
app.use("/api/auth", authRoutes);
app.use("/api/users",authenticateToken, userRoutes);
app.use("/api/posts",authenticateToken, postRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/public/index.html"));
});

app.listen(process.env.DEV_PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.DEV_PORT}`);
});
