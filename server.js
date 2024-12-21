const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const TaskModel = require('./Model/model')
require('dotenv').config();

const app = express();

app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/cloudTasks')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.get('/get', (req, res) => {
    TaskModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/post', (req, res) => {
    const task = req.body.task
    const categorie = req.body.categorie
    TaskModel.create({
        task: task,
        categorie: categorie
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req, res) => {
    const {id} = req.params
    TaskModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})