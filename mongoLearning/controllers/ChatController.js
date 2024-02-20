const Chat=require("../models/ChatModel");
const Message=require("../models/MessageModel");

module.exports.createChat=async function(req,res,next){
    try{
        const sender=req.params.id;
        const {receiver,message}=req.body;

        const msg=await Message.create({
            text:message,
            sender
        });



        // const isChat=await Chat.find({users:{$all:[sender,receiver]}});
        const isChat=await Chat.find({users:[sender,receiver]});

        if(isChat.length>0){
            isChat[0].messages.push(msg._id);
            await isChat[0].save();

            let results=await isChat[0].populate("messages");

            results=await results.populate("messages.sender");
            
            return res.json({results});
        }else{
            let chat=await Chat.create({
                name:"chat test",
                users:[sender,receiver],
                messages:[msg._id]
            });

            let result=await chat.populate("messages","text");
            return res.json({result});
        }

    }catch(err){
        next(err);
    }
}