const mongoose = require('mongoose')
const {model, Schema} = mongoose

//Esquema para los documentos de tareas

const taskSchema = new Schema({
    title:{type:String, required:[true, 'Title is required']},
    description: {type: String, required: [true, 'Description is required']},
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
},{versionKey:false});


//Modelo para la coleccion tasks
const TaskModel = model('tasks',taskSchema);

module.exports = TaskModel;