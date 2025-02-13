import React from 'react';
import { useDrag } from 'react-dnd';

interface FooterProps {
  content: string;
  id: string;
}

const Footer: React.FC<FooterProps> = ({ content, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FOOTER', 
    item: { id, type: 'FOOTER' },  
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
     
      className={`footer ${isDragging ? 'dragging' : ''}`}
      style={{ padding: '10px', backgroundColor: '#f1f1f1', border: '1px solid #ddd'}}
    >
      {content}
    </div>
  );
};

export default Footer;
