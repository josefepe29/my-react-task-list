import { useContext, useEffect } from "react";
import { Task } from "./Task";
import { DataContext } from "../context/Data";

export const TaskList = () => {
  const { newTasks, fetchTasks } = useContext(DataContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <section className="task-section">
      <div>
        <h3>These are your pending tasks</h3>
      </div>
      <ul>
        {newTasks.map((task, index) => {
          return (
            <Task
              key={index}
              id={task._id}
              title={task?.title}
              description={task?.description}
              status={task?.status}
            />
          );
        })}
      </ul>
    </section>
  );
};
