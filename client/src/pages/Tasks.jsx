import { HeaderTask } from "../components/HeaderTask";
import { TaskList } from "../components/TaskList";

export default function Tasks() {
  return (
    <main className="container-main">
      <HeaderTask />
      <TaskList />
    </main>
  );
}
