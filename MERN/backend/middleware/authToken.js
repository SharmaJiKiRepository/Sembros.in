// middleware/authToken.js
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

async function authToken(req, res, next) {
    try {
        // Extract token from cookies
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async function (err, decoded) {
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

            // Ensuring roles are properly captured and assigned
            req.userId = user._id.toString();       // Store user ID as a string
            req.userRole = user.role;    // Store user role (ADMIN or SELLER)

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
