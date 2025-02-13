import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Card from '../molecules/Card';

const MainContainer: React.FC = () => {
  const [droppedItems, setDroppedItems] = useState<any[]>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item: { id: string }) => {
      setDroppedItems((prevItems) => [...prevItems, item]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`main-container ${isOver ? 'over' : ''}`}
      style={{ flex: 1, padding: '20px', borderLeft: '2px solid #ccc' }}
    >
      <h2>Main Container</h2>
      <p>Drag and drop items here.</p>

      <div className="dropped-items">
        {droppedItems.map((item, index) => (
          <Card key={index} title={`Dropped Card ${index + 1}`} content={`This is content of card ${index + 1}`} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
