import { Task } from "./Task"


export const TaskList = ({tasks}) => {
    

    return (
        
        <section className="task-section">
            <h3>These are your pending tasks</h3>
            <ul>
                
                {tasks.map((task, index) => {
            
                    return <Task key={index} description={task.description} decoration={task.decoration}/>
                })}

            </ul>
        </section>
    )
}
