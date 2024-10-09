const express = require('express');
const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout');
const updateUser = require('../controller/user/updateUser');
const { allUsers, blockUnblockUser } = require('../controller/user/allUsers');
const UploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const deleteProductController = require('../controller/product/deleteProduct');
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViewProduct = require('../controller/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');
const { getUserOrders, placeOrder, cancelOrder, deleteOrder } = require('../controller/order/orderController'); // Updated
const transactionHistoryController = require('../controller/order/transactionsHistoryController');
const updateUserProfile = require('../controller/user/updateUserProfile');

// User routes
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);
router.put('/users/profile', authToken, updateUserProfile);
router.get('/users/orders', authToken, getUserOrders);
router.get('/users/transactions', authToken, transactionHistoryController); // Corrected route

// Admin panel
router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.put('/admin/block-unblock-user', authToken, blockUnblockUser);

// Admin routes for managing products
router.get("/admin/products", authToken, getProductController);
router.post("/admin/upload-product", authToken, UploadProductController);
router.put("/admin/update-product", authToken, updateProductController);
router.delete("/admin/delete-product/:id", authToken, deleteProductController);

// Product routes
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct);
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

// Add to cart routes
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-cart-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

// Checkout and Order routes
router.post('/checkout', authToken, placeOrder);
router.put('/orders/cancel/:orderId', authToken, cancelOrder);
router.delete('/orders/delete/:orderId', authToken, deleteOrder); // New route for deleting order history

module.exports = router;
