const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true, // имя обязательно должно быть заполнена
        trim: true // учитывая пробелы 
    },
    age:{
        type: Number,
        required: true
        
    }
    
})
module.exports = mongoose.model("Students" ,studentSchema )



















