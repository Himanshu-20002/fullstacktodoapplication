const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://parttimehimanshu22:disturbguy@cluster0.nu2z28v.mongodb.net/")


const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

})
const todo = mongoose.model('todo',todoSchema);
module.exports={
    todo:todo
}