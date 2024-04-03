const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
const router = express.Router();

app.use(express.json());
app.use("/", express.static("frontend/public"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
