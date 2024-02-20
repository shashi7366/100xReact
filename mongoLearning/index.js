const express=require("express");

const mongoose=require("mongoose");
const { registerUser } = require("./controllers/UserController");
const {createChat}=require("./controllers/ChatController");

const app=express();

mongoose.connect("mongodb+srv://shashi7366:3lw4WPDlYJdMddXS@cluster0.7b6fn.mongodb.net/")
.then((res)=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err.message);
});



app.use(express.json());

// Routes goes here

app.post("/api/users/register",registerUser);

app.post("/api/chats/create/:id",createChat);

app.get("/",(req,res,next)=>{
   res.send("Hi! Welcome server");
})


//

app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send(err.message);
    }
});


const server=app.listen(3000);