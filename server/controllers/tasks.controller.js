const TaskModel = require("../models/taskModel.js")

const getTasks = async (req, res) => {
  try {
    const task = await TaskModel.find()

    if (!task) {
      return res.status(401).json({ message: 'Tasks not found' });
    }

    res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

const getTasksById = async (req, res) => {
  const taskId = req.params.id; 
    if (taskId === undefined || taskId === null || taskId.trim() === '' || taskId < 0) {
        res.status(404).json('Invalid ID');
        return;
  }
  try {
    const task = await TaskModel.findById(id)
      if (!task) {
          res.status(404).json({ error: 'Task not found' });
      } 
      res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

const createTask = async (req, res) => {
  const body = req.body;
  try {
    const result = new TaskModel(body)
    const task = await result.save()
    
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
    
}

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const body = req.body
  if (taskId === undefined || taskId === null || taskId.trim() === '' || taskId < 0) {
      return res.status(404).json('Invalid ID');
  }

  try {
    const task = await TaskModel.findByIdAndUpdate({ _id: taskId }, body , { new: true })
    console.log(task)
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    } 
    res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    
    if (taskId === undefined || taskId === null || taskId < 0) {
      return res.status(404).json('El ID de la tarea no es válido');
    }
  
  
  try {
    const task = await TaskModel.findByIdAndDelete({ _id: taskId})

    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    } 
    res.json(task)
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = {
    getTasks,
    getTasksById,
    createTask,
    updateTask,
    deleteTask
}