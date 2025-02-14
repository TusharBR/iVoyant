import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Button from '../atoms/Button';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Card from '../molecules/Card';

const MainContainer= () => {
  const [droppedHeaders, setDroppedHeaders] = useState<any[]>([]);
  const [droppedButtonsAndCards, setDroppedButtonsAndCards] = useState<any[]>([]);
  const [droppedFooters, setDroppedFooters] = useState<any[]>([]);

  // header Drop zone
  const [{ isOverHeader }, headerDrop] = useDrop(() => ({
    accept: ['HEADER'],
    drop: (item: { id: string; type: string }) => {
      setDroppedHeaders((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverHeader: monitor.isOver(),
    }),
  }));

  // btns and card drop zone
  const [{ isOverButtonsAndCards }, buttonsAndCardsDrop] = useDrop(() => ({
    accept: ['BUTTON', 'CARD'],
    drop: (item: { id: string; type: string }) => {
      setDroppedButtonsAndCards((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverButtonsAndCards: monitor.isOver(),
    }),
  }));

  // footer drop zone
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
      <div className={`header-drop-zone ${isOverHeader ? 'over' : ''}`} ref={headerDrop}>
        {droppedHeaders.map((item, index) => (
          <Header key={index} title={`Header ${index + 1}`} id={item.id} />
        ))}
      </div>

      {/* Buttons and Cards Drop Zone */}
      <div className={`button-drop-zone ${isOverButtonsAndCards ? 'over' : ''}`} ref={buttonsAndCardsDrop}>
        {droppedButtonsAndCards.map((item, index) =>
          item.type === 'BUTTON' ? (
            <Button key={index} id={item.id}>
              Button {index + 1}
            </Button>
          ) : (
            <Card key={index} id={item.id} title={`Card ${index + 1}`} content="This is a card" buttonText="Click Me" />
          )
        )}
      </div>

      {/* Footer Drop Zone */}
      <div className={`footer-drop-zone ${isOverFooter ? 'over' : ''}`} ref={footerDrop}>
        {droppedFooters.map((item, index) => (
          <Footer key={index} content={`Footer ${index + 1}`} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
