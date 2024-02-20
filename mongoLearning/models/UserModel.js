const mongoose=require("mongoose");

const userModel=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports=mongoose.model("User",userModel);