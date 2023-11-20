import { useState, useEffect } from "react";
import axios from 'axios'

export function useAPI() {
  const [newTasks, setNewTasks] = useState([])

  useEffect(() => {
      fetchTasks()
    }, []); 
  
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks");
        setNewTasks(response.data);
      } catch (error) {
        console.error("Error al obtener tareas:", error);
      }
    };

  //Agregar una tarea a la lista y agregarla al localStorage
  const addTask = async (task) => {   
    
    setNewTasks([...newTasks, task])
    try {
      // Realiza la petición POST para agregar una tarea
      await axios.post("http://localhost:3000/api/tasks", task);
      // Vuelve a obtener las tareas después de agregar una nueva
      fetchTasks()
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  }
  
  //Actualizar el estado de una tarea de la lista y actualizar el localStorage
  const handleUpdateStatus = async (id, stat) => {
  
    try {
      const updatedTasks = newTasks.map(task =>
      task.id === id ? { ...task, status: stat } : task
     );
      setNewTasks(updatedTasks)

      // Realiza la petición PUT para actualizar el estado de una tarea
      await axios.put(`http://localhost:3000/api/tasks/${id}`, { status: stat });
      fetchTasks()
    } catch (error) {
      console.error("Error al actualizar estado de tarea:", error);
    }
  }

  //Eliminar una tarea de la lista y borrarla del localStorage
  const handleDeleteTask = async (id) => {
    console.log(id)
    try {
      const deletedTasks = newTasks.filter((task) => task.id !== id);
      setNewTasks(deletedTasks)
      // Realiza la petición DELETE para eliminar una tarea
      await axios.delete(`http://localhost:3000/api/tasks/${id}`);
      // Vuelve a obtener las tareas después de eliminar una tarea
      fetchTasks();
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  }
  
  //Edita una tarea de la lista y la actualiza en el localStorage
  const handleEditTask = async(id, updatedTask) => {
    
    try {
      // Crear una copia del array de tareas
      const updatedTasks = newTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );

      // Actualizar el estado local
      setNewTasks(updatedTasks);

      // Realizar la petición PUT al servidor
      await axios.put(`http://localhost:3000/api/tasks/${id}`, updatedTask);
      fetchTasks()
    } catch (error) {
      console.error("Error al editar tarea:", error);
    }
  }
    return { newTasks, setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus }
}
    
