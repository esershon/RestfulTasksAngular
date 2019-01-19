var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/restfulTaskAPI');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "A title"], minlength: [2, "Title must be at least 2 characters long"]},
    description: {type: String, default:""},
    completed: {type: Boolean, default:false},
}, {timestamps: true})

module.exports = mongoose.model('Task', TaskSchema);



