
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskList from "./TaskList";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React DnD", status: "todo" },
    { id: 2, text: "Build a DnD Project", status: "todo" },
    { id: 3, text: "Submit Assignment", status: "todo" },
  ]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
        <TaskList title="To-Do" tasks={tasks} setTasks={setTasks} status="todo" />
        <TaskList title="Completed" tasks={tasks} setTasks={setTasks} status="completed" />
      </div>
    </DndProvider>
  );
};

export default App;
