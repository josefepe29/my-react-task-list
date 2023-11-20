import { useContext } from "react"
import { Task } from "./Task"
import { DataContext, DataProvider } from "../context/data"


export const TaskList = () => {
    
    const {newTasks} = useContext(DataContext)

    return (
        
        <section className="task-section">
            <div>
                <h3>These are your pending tasks</h3>
            </div>
            <ul>    
                {newTasks.map((task, index) => {
            
                    return <Task
                        key={index}
                        id={task.id}
                        title={task?.title}
                        description={task?.description}
                    />
                })}

            </ul>
        </section>
    )
}
