import { useDrag } from 'react-dnd';

const LeftContainer= () => {
  return (
    <div className="left-container" style={{display:"flex",alignItems:"center"}}>
      <h3 style={{margin:"0 0 20px 0",textDecoration:"underline"}}>Components</h3><br />
      <DraggableButton label="Header" type="HEADER" />
      <DraggableButton label="Button" type="BUTTON" />
      <DraggableButton label="Card" type="CARD" />
      <DraggableButton label="Banner" type="BANNER"/>
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
        width: '60%',
        marginBottom: '10px',
        cursor: 'grab',
        backgroundColor: '#007bff',
        color: '#fff',
        border: '2px solid black',
        borderRadius: '2px',
        fontSize:"20px"
      }}
    >
      {label}
    </button>
  );
};

export default LeftContainer;
