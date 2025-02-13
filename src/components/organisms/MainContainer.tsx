import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Card from '../molecules/Card';

const MainContainer: React.FC = () => {
  const [droppedHeaders, setDroppedHeaders] = useState<any[]>([]);
  const [droppedButtons, setDroppedButtons] = useState<any[]>([]);
  const [droppedcards, setDroppedcards] = useState<any[]>([]);
  const [droppedFooters, setDroppedFooters] = useState<any[]>([]);

  // Header drop zone (Red)
  const [{ isOverHeader }, headerDrop] = useDrop(() => ({
    accept: ['HEADER'],
    drop: (item: { id: string; type: string }) => {
      setDroppedHeaders((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverHeader: monitor.isOver(),
    }),
  }));

  // card drop zone (Blue)
  const [{ isOvercard }, cardDrop] = useDrop(() => ({
    accept: ['CARD'],
    drop: (item: { id: string; type: string }) => {
      setDroppedcards((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOvercard: monitor.isOver(),
    }),
  }));
  // Button drop zone (Blue)
  const [{ isOverbutton }, buttonDrop] = useDrop(() => ({
    accept: ['BUTTON'],
    drop: (item: { id: string; type: string }) => {
      setDroppedButtons((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverbutton: monitor.isOver(),
    }),
  }));

  

  // Footer drop zone (Yellow)
  const [{ isOverFooter }, footerDrop] = useDrop(() => ({
    accept: ['FOOTER'],
    drop: (item: { id: string; type: string }) => {
      setDroppedFooters((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverFooter: monitor.isOver(),
    }),
  }));

  return (
    <div className="main-container">
      <h2>Drop here</h2>

      {/* Header Drop Zone */}
      <div
        className={`header-drop-zone ${isOverHeader ? 'over' : ''}`}
        ref={headerDrop}
      >
        {droppedHeaders.map((item, index) => (
          <Header key={index} title={`Header ${index + 1}`} id={item.id} />
        ))}
      </div>

      {/* Button Drop Zone */}
      <div
        className={`button-drop-zone ${isOverbutton ? 'over' : ''}`}
        ref={buttonDrop}
      >
        {droppedButtons.map((item, index) => (
          <Button key={index} id={item.id}>
            Button {index + 1}
          </Button>
          //  <Card  key={index} title="Footer Component" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, vero.' id="card-1" />
        ))}
      </div>

      
      {/* card Drop Zone */}
      <div
        className={`button-drop-zone ${isOvercard ? 'over' : ''}`}
        ref={cardDrop}
      >
        {droppedcards.map((item, index) => (
         
           <Card  key={index} title="Footer Component" content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, vero.' id="card-1" />
        ))}
      </div>

      {/* Footer Drop Zone */}
      <div
        className={`footer-drop-zone ${isOverFooter ? 'over' : ''}`}
        ref={footerDrop}
      >
        {droppedFooters.map((item, index) => (
          <Footer key={index} content={`Footer ${index + 1}`} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
