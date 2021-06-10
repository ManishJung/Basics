const mongoose =require("mongoose");

mongoose.connect(process.env.DB_CONNECT,{
    useCreateIndex: true, useNewUrlParser:true, useUnifiedTopology:true
     }).then(()=>{
         console.log("Connected to DB");
     }).catch((e)=> {
         console.log("No connection");
     });