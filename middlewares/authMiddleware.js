const jwt = require("jsonwebtoken");

const tokenVerification = (req, res, next) => {
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, process.env.SM_JWTTOKEN, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "invalid token" });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({ message: "no token provided" });
    }
};

module.exports = tokenVerification;
