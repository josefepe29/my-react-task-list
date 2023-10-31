import { Header } from "./components/Header"
import { HeaderTask } from "./components/HeaderTask"
import { TaskList } from "./components/TaskList"

const tasks = [
    {
        description:"Hacer la tarea",
        decoration:""
    },
    {
        description:"Realizar las actividades de React",
        decoration:""
    },
    {
        description:"Proponer nuevas actividades",
        decoration:"line-through"
    },
    {
        description:"Estudiar Hooks",
        decoration:"line-through"
    },
]

function App() {
  

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
            <HeaderTask/>
            <TaskList tasks={tasks} />
      </main>
    </>
  )
}

export default App
