const express = require('express');
const router = express.Router();
const {getTasks, getTasksById, createTask, updateTask, deleteTask} = require('../controllers/tasks.controller.js')


router.get('/tasks', getTasks)

router.get('/tasks/:id', getTasksById)

router.post('/tasks', createTask)

router.put('/tasks/:id',updateTask)

router.delete('/tasks/:id', deleteTask)

module.exports = router