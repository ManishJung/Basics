const mongoose = require("mongoose");
//const validator = require("validator");

const studentSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 3
    },
    email:{
        type: String,
        required: true,
        /*validate(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }*/

    },
    phone:{
        type: Number,
        required: true,
        minlength: 10
    }
})

const Student = new mongoose.model( 'Student', studentSchema);
module.exports =Student;

