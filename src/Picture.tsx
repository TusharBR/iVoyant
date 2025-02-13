import { useDrag } from "react-dnd";

// Define props interface
interface PictureProps {
  id: number;
  url: string;
}

function Picture({ id, url }: PictureProps) {
  const [{ isDragging }, drag] = useDrag<{ id: number }, void, { isDragging: boolean }>(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      width="150px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
      alt="Draggable item"
    />
  );
}

export default Picture;