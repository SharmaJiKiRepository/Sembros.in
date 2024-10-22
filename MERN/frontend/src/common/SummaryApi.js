// src/common/SummaryApi.js
const backendDomin = "http://localhost:8080"; // Ensure this is correct

const SummaryApi = {
  signUP: {
    url: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logout_user: {
    url: `${backendDomin}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomin}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomin}/api/update-user`,
    method: "post",
  },
  uploadProduct: {
    url: `${backendDomin}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomin}/api/get-product`,
    method: "get",
  },
  getSellerProducts: {
    url: `${backendDomin}/api/get-seller-products`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomin}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomin}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomin}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomin}/api/product-details`,
    method: "post",
  },
  addToCartProduct: {
    url: `${backendDomin}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomin}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomin}/api/view-cart-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomin}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomin}/api/delete-cart-product`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomin}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomin}/api/filter-product`,
    method: "post",
  },
  userOrders: {
    url: `${backendDomin}/api/users/orders`,
    method: "get",
  },
  transactionHistory: {
    url: `${backendDomin}/api/users/transactions`,
    method: "get",
  },
  returnOrder: {
    url: `${backendDomin}/api/orders/return`,
    method: "post",
  },
  checkout: {
    url: `${backendDomin}/api/checkout`,
    method: "post",
  },
  updateUserProfile: {
    url: `${backendDomin}/api/users/profile`,
    method: "put",
  },
  deleteProduct: {
    url: `${backendDomin}/api/seller/delete-product`,
    method: "delete",
  },
  adminDeleteProduct: { // **New Admin Delete Product Endpoint**
    url: `${backendDomin}/api/admin/delete-product`,
    method: "delete",
  },
  blockUnblockUser: {
    url: `${backendDomin}/api/admin/block-unblock-user`,
    method: "PUT",
  },
  cancelOrder: {
    url: `${backendDomin}/api/orders/cancel`,
    method: "put",
  },
  deleteOrder: {
    url: `${backendDomin}/api/orders/delete`,
    method: "DELETE",
  },
};

export default SummaryApi;
