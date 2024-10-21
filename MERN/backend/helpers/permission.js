const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
    const user = await userModel.findById(userId);
    return user && ['ADMIN', 'SELLER'].includes(user.role.toUpperCase());
}

module.exports = uploadProductPermission;
