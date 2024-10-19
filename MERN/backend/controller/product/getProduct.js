const productModel = require("../../models/productModel");

const getProductController = async (req, res) => {
    try {
        const sellerId = req.userId;  // Ensure this is being correctly set by your authentication middleware

        // Fetch only products that belong to the logged-in seller
        const allProduct = await productModel.find({ seller: sellerId }).sort({ createdAt: -1 });

        res.json({
            message: "All Products for Seller",
            success: true,
            error: false,
            products: allProduct
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = getProductController;
