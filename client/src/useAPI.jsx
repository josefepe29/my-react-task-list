import { useState, useContext, useEffect } from "react";
import { Axios } from "./api/auth";
import { AuthContext } from "./context/Auth";

export function useAPI() {
  const [newTasks, setNewTasks] = useState([]);
  const { auth } = useContext(AuthContext);

  //Obtiene las tareas al momento de montar la pagina
  const fetchTasks = async () => {
    try {
      const response = await Axios.get("/tasks");
      setNewTasks(response.data);
    } catch (error) {
      console.error("Fail to fetch the tasks:", error);
    }
  };

  //Agregar una tarea a la lista y agregarla al localStorage
  const addTask = async (task) => {
    setNewTasks([...newTasks, task]);
    try {
      // Realiza la petición POST para agregar una tarea
      if (auth) {
        await Axios.post("http://localhost:3000/api/tasks", task);
        fetchTasks();
      }
      // Vuelve a obtener las tareas después de agregar una nueva
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  };

  //Actualizar el estado de una tarea de la lista y actualizar el localStorage
  const handleUpdateStatus = async (id, stat) => {
    try {
      const updatedTasks = newTasks.map((task) =>
        task.id === id ? { ...task, status: stat } : task
      );
      setNewTasks(updatedTasks);

      // Realiza la petición PUT para actualizar el estado de una tarea
      await Axios.put(`http://localhost:3000/api/tasks/${id}`, {
        status: stat,
      });
      // Vuelve a obtener las tareas después de actualizar una nueva
      fetchTasks();
    } catch (error) {
      console.error("Error al actualizar estado de tarea:", error);
    }
  };

  //Eliminar una tarea de la lista y borrarla del localStorage
  const handleDeleteTask = async (id) => {
    console.log(id);
    try {
      const deletedTasks = newTasks.filter((task) => task.id !== id);
      setNewTasks(deletedTasks);
      // Realiza la petición DELETE para eliminar una tarea
      await Axios.delete(`http://localhost:3000/api/tasks/${id}`);
      // Vuelve a obtener las tareas después de eliminar una tarea
      fetchTasks();
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  //Edita una tarea de la lista y la actualiza en el localStorage
  const handleEditTask = async (id, updatedTask) => {
    try {
      // Crear una copia del array de tareas
      const updatedTasks = newTasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      );

      // Actualizar el estado local
      setNewTasks(updatedTasks);

      // Realizar la petición PUT al servidor
      await Axios.put(`http://localhost:3000/api/tasks/${id}`, updatedTask);
      // Vuelve a obtener las tareas después de actualizar una nueva
      fetchTasks();
    } catch (error) {
      console.error("Error al editar tarea:", error);
    }
  };
  return {
    newTasks,
    setNewTasks,
    addTask,
    handleDeleteTask,
    handleEditTask,
    handleUpdateStatus,
    fetchTasks,
  };
}
