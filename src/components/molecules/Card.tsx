import React from 'react';
import { useDrag } from 'react-dnd';

interface CardProps {
  title: string;
  content: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id, type: 'CARD' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button ref={drag} className={`card ${isDragging ? 'dragging' : ''}`}>
      <h2 >{title}</h2>
      <p>{content}</p>
      <span >Read more</span>
    </button>
  );
};

export default Card;
