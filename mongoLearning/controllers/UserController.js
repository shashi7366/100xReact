const User=require("../models/UserModel");


module.exports.registerUser=async function (req,res,next){
    try{
        const {name,email,password}=req.body;
        const user=await User.create({
            name,email,password
        });

        const result=await User.find({_id:user._id}).select("-password");

        res.json({result});

    }catch(err){
        next(err);
    }
}