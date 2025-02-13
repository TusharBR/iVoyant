import React from 'react';
import { useDrag } from 'react-dnd';

interface HeaderProps {
  title: string;
  id: string; // Add an id to identify the header
}

const Header: React.FC<HeaderProps> = ({ title, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'HEADER',  // Type of item
    item: { id, type: 'HEADER' },  // Item type and id
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <h1 x
      ref={drag}
      className={`header ${isDragging ? 'dragging' : ''}`}
    >
      {title}
    </h1>
  );
};

export default Header;
