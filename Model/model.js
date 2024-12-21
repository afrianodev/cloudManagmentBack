const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true
    },
    categorie: {
        type: String
    }
})

const TaskModel = mongoose.model('taskCloud', TasksSchema);

module.exports = TaskModel;