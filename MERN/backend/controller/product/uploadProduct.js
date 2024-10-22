// controller/product/UploadProductController.js
const productModel = require("../../models/productModel");

async function UploadProductController(req, res) {
    try {
        const sessionUserId = req.userId.toString();
        const userRole = req.userRole;

        // Check user role permissions
        if (!['ADMIN', 'SELLER'].includes(userRole.toUpperCase())) {
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
            seller: sessionUserId // Ensure seller ID is correctly assigned
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
