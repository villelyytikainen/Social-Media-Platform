const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    console.log(req.headers.cookie.split("=")[1]);
    const token = req.headers.cookie.split("=")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, process.env.SM_JWTTOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;
        next();
    });
};

module.exports = authenticateToken;
