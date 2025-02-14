import { useDrag } from 'react-dnd';

const LeftContainer= () => {
  return (
    <div className="left-container">
      <DraggableButton label="Header" type="HEADER" />
      <DraggableButton label="Button" type="BUTTON" />
      <DraggableButton label="Card" type="CARD" />
      <DraggableButton label="Footer" type="FOOTER" />
      
    </div>
  );
};

const DraggableButton = ({ label, type }:{ label: string; type: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className={`btn ${isDragging ? 'dragging' : ''}`}
      style={{
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        cursor: 'grab',
        padding: '18px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize:"30px"
      }}
    >
      {label}
    </button>
  );
};

export default LeftContainer;
