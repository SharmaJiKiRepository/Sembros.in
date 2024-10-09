const userModel = require("../../models/userModel");

async function allUsers(req, res) {
    try {
        console.log("userid all Users", req.userId);

        const allUsers = await userModel.find();

        res.json({
            message: "All Users",
            data: allUsers.map(user => ({
                ...user.toObject(),
                isBlocked: user.isBlocked, // Include the block status in the response
                phone: user.phone, // Add phone number
                companyName: user.companyName, // Add company name if seller
                gstNumber: user.gstNumber, // Add GST number if seller
                address: user.address, // Add address if seller
                typeOfProducts: user.typeOfProducts // Add type of products if seller
            })),
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

// New function to block/unblock a user
async function blockUnblockUser(req, res) {
    try {
        const { userId, isBlocked } = req.body; // Expecting userId and new block status from request body

        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { isBlocked: isBlocked },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            message: `User has been ${isBlocked ? 'blocked' : 'unblocked'} successfully`,
            data: updatedUser // Return updated user information
        });
    } catch (error) {
        console.error('Error blocking/unblocking user:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

module.exports = {
    allUsers,
    blockUnblockUser // Export the new function
};