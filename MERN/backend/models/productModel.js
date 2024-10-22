// models/productModel.js
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true // Ensure seller field is required
    }
}, {
    timestamps: true
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
