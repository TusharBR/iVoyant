import { useDrag } from "react-dnd";

const ItemType = {
  TASK: "task",
};
interface TaskType {
  id: number;
  text: string;
}

interface TaskProps {
  task: TaskType;
}
const Task = ({ task }:TaskProps) => {
  const [{isDragging }, drag] = useDrag<{ id: number }, void, { isDragging: boolean }>(() => ({
    type: ItemType.TASK,
    item: { id: task.id },  
   
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "red",
        border: "1px solid gray",opacity: isDragging ? 0.5 : 1
      }}
    >
      {task.text}
    </div>
  );
};

export default Task;
