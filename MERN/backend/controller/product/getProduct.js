const productModel = require("../../models/productModel");

const getProductController = async (req, res) => {
    try {
        const userRole = req.userRole;

        let allProduct;

        if (userRole.toUpperCase() === 'ADMIN') {
            // Fetch all products for admin
            allProduct = await productModel.find().sort({ createdAt: -1 });
            res.json({
                message: "All Products for Admin",
                success: true,
                error: false,
                products: allProduct
            });
        } else {
            const sellerId = req.userId;
            // Fetch only products that belong to the logged-in seller
            allProduct = await productModel.find({ seller: sellerId }).sort({ createdAt: -1 });
            res.json({
                message: "All Products for Seller",
                success: true,
                error: false,
                products: allProduct
            });
        }
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = getProductController;
