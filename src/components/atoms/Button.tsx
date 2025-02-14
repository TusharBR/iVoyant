import React from 'react';
import { useDrag } from 'react-dnd';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  id: string; 
}

const Button= ({ children, onClick, id }:ButtonProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'BUTTON', 
    item: { id, type: 'BUTTON' },  
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button 
      ref={drag}
      style={{display:"inline",width:"100px",height:"10%",margin:"10px"}}
      className={`btn ${isDragging ? 'dragging' : ''}`}
      onClick={onClick} >
      {children}
    </button>
  );
};

export default Button;
