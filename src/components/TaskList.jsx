import { Task } from "./Task"


export const TaskList = ({ list, updateStatus, deleteTaskParent}) => {
    
    //Pasa las props del estado e id traidas del hijo al nuevo padre (App)
    const handleStat = (id, stat) => {
        // console.log(id,stat)
       updateStatus(id,stat)
    } 
    

    //Pasa las props del id traidas del hijo al nuevo padre (App)
    const handleDelete = (id) => {
        deleteTaskParent(id)
    }

    return (
        
        <section className="task-section">
            <div>
                <h3>These are your pending tasks</h3>
            </div>
            <ul>    
                {list.map((task, index) => {
            
                    return <Task key={index} id={index} title={task.title} description={task.description} status={task.status} updateStat={handleStat} deleteTask={handleDelete} />
                })}

            </ul>
        </section>
    )
}
