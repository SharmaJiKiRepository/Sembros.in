// deleteProductController.js

const Product = require('../../models/productModel');

const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;

        // Find the product by ID
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if the product belongs to the seller
        if (product.seller.toString() !== userId.toString()) {
            return res.status(403).json({ success: false, message: 'Unauthorized to delete this product' });
        }

        // Delete the product
        await product.deleteOne();

        return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = deleteProductController;
