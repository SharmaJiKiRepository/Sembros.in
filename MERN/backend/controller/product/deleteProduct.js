const productModel = require("../../models/productModel");

const deleteProductController = async (req, res) => {
    try {
        const userRole = req.userRole;
        const userId = req.userId;
        const productId = req.params.id;

        // Fetch the product by ID
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                error: true,
                success: false
            });
        }

        // Check if the user is ADMIN or the seller who owns the product
        if (userRole.toUpperCase() !== 'ADMIN' && product.seller.toString() !== userId) {
            return res.status(403).json({
                message: "Unauthorized to delete this product",
                error: true,
                success: false
            });
        }

        // Delete the product
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
