// controller/product/deleteProductController.js
const productModel = require("../../models/productModel");

const deleteProductController = async (req, res) => {
    try {
        const userRole = req.userRole;
        const userId = req.userId.toString();
        const productId = req.params.id;

        const product = await productModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        console.log("User ID:", userId);
        console.log("Product Seller ID:", product.seller ? product.seller.toString() : 'No seller');

        if (userRole.toUpperCase() === 'ADMIN') {
            // Admin can delete any product
            // proceed to delete
        } else if (product.seller && product.seller.toString() === userId) {
            // Seller can delete their own product
            // proceed to delete
        } else {
            return res.status(403).json({
                message: "Unauthorized to delete this product",
                error: true,
                success: false
            });
        }

        await product.deleteOne();
        res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            error: false
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
};

module.exports = deleteProductController;
