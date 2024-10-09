const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const multer = require('multer');
const authToken = require('../../middleware/authToken'); // Import authToken middleware

const upload = multer({ dest: 'uploads/' });

router.put('/users/profile', authToken, upload.single('profilePic'), async (req, res) => {
    try {
        const userId = req.userId; // Extract userId from token middleware
        const { name, address, role, gstNumber, phone, companyName } = req.body; // Fields to update
        let updateData = { name, address, role };

        if (req.file) {
            const profilePic = req.file.path; // Path where the image is saved
            updateData.profilePic = profilePic;
        }

        if (role === 'seller') {
            // Ensure mandatory fields for seller
            if (!gstNumber || !phone || !companyName) {
                return res.status(400).json({ success: false, message: 'GST Number, Phone, and Company Name are required for sellers.' });
            }
            updateData.gstNumber = gstNumber;
            updateData.phone = phone;
            updateData.companyName = companyName;
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true, runValidators: true });

        if (!updatedUser) {
            console.log("User not found");
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        console.log("Update Successful:", updatedUser);
        res.status(200).json({ success: true, user: updatedUser });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ success: false, message: 'Error updating user profile', error: error.message });
    }
});

module.exports = router; // Export the router
