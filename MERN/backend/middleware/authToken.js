const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async function(err, decoded) {
            if (err) {
                return res.status(403).json({
                    message: "Token is invalid or expired",
                    error: true,
                    success: false
                });
            }

            const user = await userModel.findById(decoded._id);
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                    error: true,
                    success: false
                });
            }

            if (user.isBlocked) {
                return res.status(403).json({
                    message: "Your account has been blocked",
                    error: true,
                    success: false
                });
            }

            req.userId = user._id;  // Store user ID in request for further use
            req.userRole = user.role;  // Optional: Store user role for further access control
            next();
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
