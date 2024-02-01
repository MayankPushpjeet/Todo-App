const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://MAYANK_PUSHPJEET:MAYANKIITkanpur2020@cluster0.rmaiga7.mongodb.net/')
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}