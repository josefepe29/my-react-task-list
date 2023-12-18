import { createContext } from "react";
import { useAPI } from "../useAPI";

//Crea el contexto de los datos de la tarea
export const DataContext = createContext();

export function DataProvider({ children }) {
  const {
    newTasks,
    setNewTasks,
    addTask,
    handleDeleteTask,
    handleEditTask,
    handleUpdateStatus,
    fetchTasks,
  } = useAPI();
  //Provee al contexto con las funciones y variables del useAPI
  return (
    <DataContext.Provider
      value={{
        newTasks,
        setNewTasks,
        addTask,
        handleDeleteTask,
        handleEditTask,
        handleUpdateStatus,
        fetchTasks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
