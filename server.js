const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
const Socket = require("socket.io");
const io = Socket();
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
//const Arduino = require("./middlewares/arduino");

app.use(express.json());
app.use("/api", apiRoutes);
app.use(express.static(path.join(__dirname, "frontend/public")));

// Handle all other routes by serving the index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/public", "index.html"));
});

//ARDUINO TEST

// app.get("/ard", (req, res) => {
//     res.send("Hello World!");
//     Arduino();
// })

//ARDUINO END

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
