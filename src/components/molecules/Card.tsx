import React from 'react';
import { useDrag } from 'react-dnd';
import Button from '../atoms/Button';
import Header from '../atoms/Header';

interface CardProps {
  title: string;
  content: string;
  id: string; // Add an id to identify the card
}

const Card: React.FC<CardProps> = ({ title, content, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`card ${isDragging ? 'dragging' : ''}`}>
      <Header title={title} />
      <p>{content}</p>
      <Button onClick={() => alert('Card clicked!')}>Click me</Button>
    </div>
  );
};

export default Card;
