const Product = require('../../models/productModel');

const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from params

        // Find and delete the product by ID
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = deleteProductController;
