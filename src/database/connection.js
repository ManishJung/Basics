const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/students_api",{
    useCreateIndex: true, useNewUrlParser:true, useUnifiedTopology:true
     }).then(()=>{
         console.log("Connected to DB");
     }).catch((e)=> {
         console.log("No connection");
     });