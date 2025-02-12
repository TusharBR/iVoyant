import { useDrop } from "react-dnd";
import Task from "./Task";

const ItemType = {
  TASK: "task",
};

const TaskList = ({ title, tasks, setTasks, status }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.TASK,
    drop: (item) => moveTask(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const moveTask = (taskId: any) => {
    setTasks((prevTasks: any[]) =>
      prevTasks.map((task: { id: any; }) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  return (
    <div
      ref={drop}
      style={{
        width: "200px",
        minHeight: "250px",
        padding: "10px",
        border: "2px dashed gray",
        backgroundColor: isOver ? "lightgreen" : "white",
      }}
    >
      <h3>{title}</h3>
      {tasks.filter((task: { status: any; }) => task.status === status).map((task: unknown) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
