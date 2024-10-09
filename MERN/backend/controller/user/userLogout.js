async function userLogout(req,res){
    try{
        res.cookie("token", token, { httpOnly: true, secure: true, sameSite : 'None' }).status(200).json({
            message: "Login successfully",
            data: token,
            success: true,
            error: false
        });

        res.clearCookie("token", token)

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}


module.exports = userLogout