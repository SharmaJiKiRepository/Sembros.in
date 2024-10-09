const User = require('../../models/userModel');
const Order = require('../../models/orderModel'); // Assuming you have this model for user orders
const Transaction = require('../../models/transactionModel'); // Assuming you have this model for transactions

// Fetch user profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Assuming you extract userId from token middleware
    const user = await User.findById(userId).select('-password'); // Exclude password

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user profile', error: error.message });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extract userId from token middleware
    const { name, email, address, role, profilePicture } = req.body; // Fields to update

    // Find the user by ID and update the necessary fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, address, role, profilePicture },
      { new: true, runValidators: true } // Return updated user and validate inputs
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating user profile', error: error.message });
  }
};

// Fetch user orders
const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ userId });

    if (!orders || orders.length === 0) {
      return res.status(404).json({ success: false, message: 'No orders found' });
    }

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user orders', error: error.message });
  }
};

// Fetch user transactions
const getUserTransactions = async (req, res) => {
  try {
    const userId = req.userId;
    const transactions = await Transaction.find({ userId });

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ success: false, message: 'No transactions found' });
    }

    res.status(200).json({ success: true, transactions });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching transactions', error: error.message });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  getUserOrders,
  getUserTransactions,
};
