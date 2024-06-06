const express = require("express");
const app = express();
const PORT = 3001;
const Socket = require("socket.io");
const io = Socket();
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const homeRoutes = require("./routes/homeRoutes");

app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend/public")));
app.use("/api", apiRoutes);
app.use("/", homeRoutes);

// Serve the index.html file for all routes except "/api" routes

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});
