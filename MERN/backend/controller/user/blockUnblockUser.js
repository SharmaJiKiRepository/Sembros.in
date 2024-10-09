const User = require('../../models/userModel');

const blockUnblockUser = async (req, res) => {
    const { userId, isBlocked } = req.body;  // Get userId and isBlocked status from the request body

    try {
        // Update the user's blocked status
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isBlocked },
            { new: true }  // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            message: `User has been ${isBlocked ? 'blocked' : 'unblocked'} successfully`,
            data: updatedUser
        });
    } catch (error) {
        console.error('Error updating block status:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = blockUnblockUser;

