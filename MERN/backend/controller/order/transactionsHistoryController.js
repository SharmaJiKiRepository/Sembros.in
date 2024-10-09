const Transaction = require('../../models/transactionModel');

// Controller to fetch transaction history for a user
const transactionHistoryController = async (req, res) => {
    console.log('User ID:', req.userId);  // Log to see what userId is being passed
    try {
        const transactions = await Transaction.find({ userId: req.userId });
        if (!transactions.length) {
            return res.status(404).json({ success: false, message: "No transactions found" });
        }
        res.json({ success: true, data: transactions });
    } catch (error) {
        console.error("Error fetching transactions:", error); // Log error for debugging
        res.status(500).json({ success: false, message: 'Error fetching transaction history', error: error.message });
    }
};

module.exports = transactionHistoryController;
