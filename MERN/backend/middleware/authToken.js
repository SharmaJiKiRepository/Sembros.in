const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel'); // Ensure you have this import

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;  // Ensure the token is being passed correctly

        console.log("Token received:", token);
        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, async function(err, decoded) {
            if (err) {
                console.log("Error verifying token:", err);
                return res.status(403).json({
                    message: "Token is invalid or expired",
                    error: true,
                    success: false
                });
            }

            console.log("Decoded Token Data:", decoded);  // Check the content of the decoded token

            // Ensure the decoded object has user ID
            if (!decoded?._id) {
                return res.status(403).json({
                    message: "Invalid token, user ID not found",
                    error: true,
                    success: false
                });
            }

            // Fetch the user from the database to check if they are blocked
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

            req.userId = decoded._id;  // Set userId to the request object
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
