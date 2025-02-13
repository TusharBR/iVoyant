import { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";


interface PictureType {
  id: number;
  url: string;
}

const PictureList: PictureType[] = [
  {
    id: 1,
    url: "https://tse2.mm.bing.net/th?id=OIP.l3rZmv55E6mhsilaRDrUuwHaEK&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    url: "http://www.buzzarenas.com/wp-content/uploads/2017/10/akshardham.jpg",
  },
  {
    id: 3,
    url: "https://tse2.mm.bing.net/th?id=OIP.aHKg2wNyS1uUoE3w90anZgHaE7&pid=Api&P=0&h=220",
  },
  {
    id: 4,
    url: "https://www.visittnt.com/blog/wp-content/uploads/2018/07/qutub-minar-delhi-1024x768.jpg",
  },
  {
    id: 5,
    url: "https://www.visittnt.com/blog/wp-content/uploads/2019/10/khajuraho.jpg",
  },
  {
    id: 6,
    url: "https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg",
  },
];

function DragDrop() {
  const [board, setBoard] = useState<PictureType[]>([]);

  const[ drop] = useDrop<{ id: number }, void, { isOver: boolean }>(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
  
  }));

  const addImageToBoard = (id: number) => {
    setBoard((prevBoard) => {
      if (prevBoard.some((item) => item.id === id)) {
        return prevBoard; 
      }
  
      const picture = PictureList.find((picture) => picture.id === id);
  
      return picture ? [...prevBoard, picture] : prevBoard;
    });
  };
  
  return (
    <div className="mainclass">
      <div className="Pictures">
        {PictureList.map((picture, ci) => (
          <Picture key={ci} url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="Board" ref={drop}>
        <h2 style={{ textAlign: "center" }}>Place to visit on my India trip</h2>
        <hr />
        {board.map((picture, ci) => (
          <Picture key={ci} url={picture.url} id={picture.id} />
        ))}
      </div>
    </div>
  );
}

export default DragDrop;