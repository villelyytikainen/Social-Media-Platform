const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.headers.cookie ? req.headers.cookie.split("=")[1] : null;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SM_JWTTOKEN);
        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authenticateToken;
