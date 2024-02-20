const mongoose=require("mongoose");


const messageModel=new mongoose.Schema({
    text:String,
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
});

module.exports=mongoose.model("Message",messageModel);