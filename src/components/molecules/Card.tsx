import React from 'react';
import { useDrag } from 'react-dnd';

interface CardProps {
  title: string;
  content: string;
  id: string;
}

const Card= ({ title, content, id }:CardProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id, type: 'CARD' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`card ${isDragging ? 'dragging' : ''}`} style={{display:"block"}}>
    <div className="card-image"></div>
    <div className="card-content">
      <span className="card-category">{content}</span>
      <h2 className="card-title">{title}</h2>
      <p className="card-meta">
        By <strong>Author</strong> new
      </p>
    </div>
  </div>
  );
};

export default Card;
