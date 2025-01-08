const express = require("express");
const app = express();
const path = require("path");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const messageRoutes = require("./routes/messages");
const authenticateToken = require("./middlewares/authMiddleware");
const { errorHandling } = require("./middlewares/errorHandling");
const { Server } = require("socket.io");

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/posts", authenticateToken, postRoutes);
app.use("/api/messages", messageRoutes);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

const io = new Server(3008);

io.on("connection", (socket) => {
    // send message to the client
    socket.emit("hello", "world");

    socket.on("howdy", (arg) => {
        console.log(arg)
    })
})

app.use(errorHandling);

app.listen(process.env.DEV_PORT, () => {
    console.log(`Server started on port http://localhost:${process.env.DEV_PORT}`);
});
