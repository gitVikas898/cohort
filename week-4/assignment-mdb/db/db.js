const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vikaskumarsingh1198:7mde5eI23UQObpTQ@cluster0.vr9ym.mongodb.net/course_selling_app")

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
        username:String,
        password:String,
        purchasedCourses:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        }]    
})

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String
})

const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model('User',UserSchema)
const Course = mongoose.model('Course',CourseSchema)

module.exports = {
    Admin,
    User,
    Course
}