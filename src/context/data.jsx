import { createContext, useEffect } from "react";
import { useAPI } from "../useAPI";

export const DataContext = createContext()

export function DataProvider({ children }) {
    const { newTasks, setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus } = useAPI()
    
    useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
  
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        setNewTasks(parsedTasks);
      }
    }, []); 
    return (
        <DataContext.Provider value={{newTasks , setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus}}>
            {children}
        </DataContext.Provider>
    )
}