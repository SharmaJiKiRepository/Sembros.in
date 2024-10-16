const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Please provide email and password");
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("User not found");
        }

        console.log("User found:", user.email);
        console.log("User isBlocked status:", user.isBlocked);

        // Check if the user is blocked
        if (user.isBlocked) {
            console.log("User is blocked. Cannot log in.");
            return res.status(403).json({
                message: "Your account has been blocked",
                error: true,
                success: false
            });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        console.log("Password match:", checkPassword);
        if (!checkPassword) {
            throw new Error("Invalid password");
        }

        const tokenData = {
            _id: user._id,
            email: user.email,
        };
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

        res.cookie("token", token, { httpOnly: true, secure: true, sameSite : 'None' }).status(200).json({
            message: "Login successfully",
            data: token,
            success: true,
            error: false
        });

    } catch (err) {
        console.error("Error during sign-in:", err.message);
        res.status(400).json({
            message: err.message || "An error occurred",
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
