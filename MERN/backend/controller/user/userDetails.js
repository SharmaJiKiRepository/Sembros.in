const userModel = require("../../models/userModel")

async function userDetailsController(req, res){
    try {
        console.log("userId", req.userId)
        const user = await userModel.findById(req.userId)

        // This line sends the user data back to the client which was missing in your version
        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "User details fetched successfully"
        });

        console.log("user", user)
    } catch(err) {
        console.log("error", err); // It's good to log the error in the console as well for debugging
        res.status(400).json({
            message: err.message || "Error fetching user details",
            error: true,
            success: false
        });
    }
}

module.exports = userDetailsController
