const userModel = require("../../models/userModel");

async function updateUser(req, res) {
    try {
        const sessionUser = req.userId;
        const { userId, email, name, role, isBlocked } = req.body; // Add isBlocked to destructure

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
            ...(isBlocked !== undefined && { isBlocked: isBlocked }) // Update isBlocked status if provided
        };

        const user = await userModel.findById(sessionUser);
        console.log("user.role", user.role);

        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true }); // Set new to return updated user

        res.json({
            data: updatedUser,
            message: "User Updated",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = updateUser;
