const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shreyas25:IGBfis3ely9Nz2NN@cluster0.bgq5fad.mongodb.net/")
.then((res)=>{
    console.log("connection success");
})
.catch((error)=>{
    console.log(error.message);
})