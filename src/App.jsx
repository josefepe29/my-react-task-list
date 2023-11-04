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
  
  const [newTasks, setNewTasks] = useState(list)

    //Carga el estado actual de las tareas del localStorage
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
    updatedTasks[id] = { ...updatedTasks[id], status: stat }
    
    setNewTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
  }

  //Eliminar una tarea de la lista y borrarla del localStorage
  const handleDeleteTask = (id) => {
    const deletedTasks = [...newTasks]
    deletedTasks.splice(id, 1)
    setNewTasks(deletedTasks)
    localStorage.setItem('tasks', JSON.stringify(deletedTasks))
  }
  

  return (
    <>
      <header className="header-container">
        <Header />
        <HeaderTask list={list} addTask={addTask} />
      </header>
      <main className="container-main">
        <TaskList list={newTasks} updateStatus={handleUpdateStatus} deleteTaskParent={handleDeleteTask}/>
      </main>
    </>
  )
}

export default App
