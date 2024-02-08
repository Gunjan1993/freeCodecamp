const mongoose = require('mongoose')

const courseSchema= new mongoose.Schema({
name:String,
duration: String


})

const CourseModel = mongoose.model("Courses", courseSchema)
module.exports=CourseModel