import { useDrag } from "react-dnd";

const ItemType = {
  TASK: "task",
};

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.TASK,
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: "lightblue",
        border: "1px solid gray",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {task.text}
    </div>
  );
};

export default Task;
