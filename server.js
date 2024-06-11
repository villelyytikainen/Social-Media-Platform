const express = require("express");
const app = express();
const PORT = 3001;
const Socket = require("socket.io");
const io = Socket();
const path = require("path");
const userRoutes = require("./routes/users")
const postRoutes = require("./routes/posts")
const homeRoutes = require("./routes/home");
const tokenVerification = require("./middlewares/authMiddleware")

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/public")));
app.use("/", homeRoutes);
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
