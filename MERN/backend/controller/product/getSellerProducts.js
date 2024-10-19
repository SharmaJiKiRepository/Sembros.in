const Product = require('../../models/productModel'); // Correct path to Product model

const getSellerProducts = async (req, res) => {
  try {
    const sellerId = req.userId; // Assuming seller ID is retrieved from the request user ID
    console.log("Fetching products for seller ID:", sellerId); // Debug log
    const products = await Product.find({ seller: sellerId }); // Adjusted to match the correct field
    console.log("Products found:", products.length, products); // Debug log to see what is found
    res.json({ success: true, products });
  } catch (error) {
    console.error('Error fetching seller products:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch seller products' });
  }
};

module.exports = getSellerProducts;
