const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
const Socket = require("socket.io");
const io = Socket();
const apiRoutes = require("./routes/apiRoutes");
//const Arduino = require("./middlewares/arduino");

app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", express.static("frontend/public"));


//ARDUINO TEST

// app.get("/ard", (req, res) => {
//     res.send("Hello World!");
//     Arduino();
// })

//ARDUINO END

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
