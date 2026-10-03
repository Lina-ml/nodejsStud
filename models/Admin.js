const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true, // имя обязательно должно быть заполнена
        trim: true // учитывая пробелы 
    },
    city:{
        type: String,
        required: true
        
    },
    lastName:{
 type: String,
 required: true
    },
    age:{
        type: Number,
        required: true
    }
    
})
module.exports = mongoose.model("Admin" ,AdminSchema )