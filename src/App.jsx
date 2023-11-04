import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { HeaderTask } from "./components/HeaderTask"
import { TaskList } from "./components/TaskList"

//Lista temporal de ejemplo

const list = []
// const list = [
//   {
//     title:"Tarea 1",
//     description: "Hacer la tarea",
//     status:false
//   },
//   {
//     title:"Tarea 2",
//     description: "Realizar las actividades de React",
//     status:false
//   },
//   {
//     title:"Tarea 3",
//     description: "Proponer nuevas actividades",
//     status:false
//   },
//   {
//     title:"Tarea 4",
//     description: "Estudiar Hooks",
//     status:false
//   }
// ]


function App() {
  
  const [newTasks, setNewTasks] = useState([])

    //Carga el estado actual de las tareas del localStorage con dependencia vacia para que se ejecute al montar la app
    useEffect(() => {
      const storedTasks = localStorage.getItem("tasks");
  
      if (storedTasks) {
        const parsedTasks = JSON.parse(storedTasks);
        setNewTasks(parsedTasks);
      }
    }, []); 

  //Agregar una tarea a la lista y agregarla al localStorage
  const addTask = (task) => {
    // console.log(task)   
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
  

  return (
    <>
      <header className="header-container">
        <Header />
        <HeaderTask addTask={addTask} />
      </header>
      <main className="container-main">
        <TaskList
          list={newTasks}
          updateStatus={handleUpdateStatus}
          deleteTaskParent={handleDeleteTask}
          editTaskParent={handleEditTask}
        />
      </main>
    </>
  )
}

export default App
