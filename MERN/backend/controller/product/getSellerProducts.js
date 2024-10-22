// getSellerProducts.js
const Product = require('../../models/productModel');

const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.userId;
    const products = await Product.find({ seller: sellerId });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch seller products' });
  }
};

module.exports = getSellerProducts;
