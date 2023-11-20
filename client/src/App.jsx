import { Header } from "./components/Header"
import { HeaderTask } from "./components/HeaderTask"
import { TaskList } from "./components/TaskList"

function App() {

  return (
    <>
      <header className="header-container">
        <Header />
        <HeaderTask />
      </header>
      <main className="container-main">
        <TaskList/>
      </main>
    </>
  )
}

export default App
