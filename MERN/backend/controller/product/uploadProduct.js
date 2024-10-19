// uploadProductController.js

const productModel = require("../../models/productModel");

async function UploadProductController(req, res) {
    try {
        const sessionUserId = req.userId;
        const userRole = req.userRole;

        // Ensure user has permission to upload products
        if (userRole !== 'seller') {
            return res.status(403).json({
                message: "Permission denied",
                error: true,
                success: false
            });
        }

        const productData = {
            productName: req.body.productName,
            brandName: req.body.brandName,
            category: req.body.category,
            productImage: req.body.productImage,
            description: req.body.description,
            price: req.body.price,
            sellingPrice: req.body.sellingPrice,
            seller: sessionUserId, // Set the seller field
        };

        const uploadProduct = new productModel(productData);
        const saveProduct = await uploadProduct.save();

        res.status(201).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: saveProduct
        });

    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false
        });
    }
}

module.exports = UploadProductController;
