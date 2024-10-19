// permission.js
const userModel = require("../models/userModel");

const uploadProductPermission = async (userId, userRole) => {
    const user = await userModel.findById(userId);
    return user && (user.role === 'ADMIN' || user.role === 'SELLER');
}

module.exports = uploadProductPermission;
