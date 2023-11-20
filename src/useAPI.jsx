import { useState, useEffect } from "react";

export function useAPI() {
    const [newTasks, setNewTasks] = useState([])

  //Agregar una tarea a la lista y agregarla al localStorage
  const addTask = (task) => {   
    
    setNewTasks([...newTasks, task])
    localStorage.setItem('tasks', JSON.stringify([...newTasks, task]))
  }
  
  //Actualizar el estado de una tarea de la lista y actualizar el localStorage
  const handleUpdateStatus = (id, stat) => {
    const updatedTasks = [...newTasks]
    const taskIndex = updatedTasks.findIndex((task) => task.id === id)
    if (taskIndex===0 || taskIndex) {
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], status: stat }
    }
    
    setNewTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  //Eliminar una tarea de la lista y borrarla del localStorage
  const handleDeleteTask = (id) => {
    const deletedTasks = [...newTasks]
    const taskIndex = deletedTasks.findIndex((task) => task.id === id)
    if (taskIndex === 0 || taskIndex) {
      deletedTasks.splice(taskIndex, 1)
    }
    setNewTasks(deletedTasks)
    localStorage.setItem('tasks', JSON.stringify(deletedTasks))
  }
  
  //Edita una tarea de la lista y la actualiza en el localStorage
  const handleEditTask = (id,task) => {
    const editedTasks = [...newTasks]
    const taskIndex = editedTasks.findIndex((task) => task.id === id)
    if (taskIndex===0 || taskIndex) {
      editedTasks[taskIndex] = { ...editedTasks[taskIndex], ...task }
    }
    setNewTasks(editedTasks)

    localStorage.setItem('tasks', JSON.stringify(editedTasks))
    }
    
    return { newTasks, setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus }
}
    
