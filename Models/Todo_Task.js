//importing mongoose
const mongoose = require('mongoose');

//creating schema
const taskschema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    taskcategory: {
        type: String,
        required: true
    },
    dateoftask: {
        type: String,
        required: true
    }
});

const Task = mongoose.model('Task' , taskschema);

module.exports = Task;