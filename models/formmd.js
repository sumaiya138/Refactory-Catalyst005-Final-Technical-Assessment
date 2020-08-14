const mongoose = require('mongoose')
const regSchema = mongoose.Schema({
    surname:String,
    givenname:String,
    dateofbirth:Date,
    placeofresidence:String, 
    occupation:String,
    nationality:String, 
})

module.exports=mongoose.model('patient', regSchema)