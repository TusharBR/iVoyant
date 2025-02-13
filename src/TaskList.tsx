import { useDrop } from "react-dnd";
import Task from "./Task";

const ItemType = {
  TASK: "task",
};
interface abctype
{
  title:string,
  tasks:{ id: number; text: string; status: string; }[],
  setTasks:React.Dispatch<React.SetStateAction<{
    id:number,
    text:string,
    status:string,
  }[]>>,
  status:string
}
  const TaskList = ({ title, tasks, setTasks, status }:abctype) => {
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemType.TASK,
      drop: (item :{id:number}) => moveTask(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
      
    }));

  const moveTask = (taskId:number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task:{
        id:number,
        text:string,
        status:string,
      } ) =>
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
        border: "2px solid blue",
      }}
    >
      <h3>{title}</h3>
      {tasks.filter((task: { status:string}) => task.status === status).map((task: unknown) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
