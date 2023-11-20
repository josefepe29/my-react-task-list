import { createContext, useEffect } from "react";
import { useAPI } from "../useAPI";
import axios from 'axios'

export const DataContext = createContext()

export function DataProvider({ children }) {
    const { newTasks, setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus } = useAPI()
    

    return (
        <DataContext.Provider value={{newTasks , setNewTasks, addTask, handleDeleteTask, handleEditTask, handleUpdateStatus}}>
            {children}
        </DataContext.Provider>
    )
}