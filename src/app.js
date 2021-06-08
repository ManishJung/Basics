const express =require("express");
const app = express();
require("./database/connection");
const Student= require('./Models/students');
app.use(express.json());
const port =process.env.PORT ||5000;


app.post("/students", (req,res)=> {

    console.log(req.body);
    const user= new Student(req.body);
    user.save()
        .then(()=>{
            res.status(201).send(user);
        })
        .catch((e)=> {
            res.status(400).send(e);
        })
})

// get all data

app.get("/students", async (req,res) =>{
    try{
       const studentsData = await Student.find();
       res.send(studentsData);
    }catch(e){
        res.send(e);

    }

})

//Get indivisual data if asked not all
app.get("/students/:id", async(req,res)=> {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
         res.send(studentData);
       

    }catch(e){
        res.send(e);

    }

})


app.listen(port, ()=>{
    console.log(`Node.js server is running on port ${port}`);
});


