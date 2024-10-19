async function userLogout(req, res) {
    try {
        // Clear the token cookie
        res.clearCookie("token", { httpOnly: true, secure: true, sameSite: 'None' });
        
        // Send a success response
        res.status(200).json({
            message: "Logged out successfully",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userLogout;
