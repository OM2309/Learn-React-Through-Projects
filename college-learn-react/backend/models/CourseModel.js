import mongoose from 'mongoose';
 const CourseSchema =  new mongoose.Schema({
    courseName:{
        type: String,
        required:[true, "courseName is required"]
    },
    courseDur:{
        type: Number,
        required:[true, "courseDur is required"]
    },
 },{timestamps:true})

 const CourseModel = mongoose.model('course', CourseSchema);

 export default CourseModel;