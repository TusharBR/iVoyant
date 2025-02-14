import { useState } from 'react';
import { useDrop } from 'react-dnd';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Card from '../molecules/Card';
import Nav from '../organisms/Nav';
import Centerpage from './Centerpage';

const MainContainer= () => {
  const [droppedHeaders, setDroppedHeaders] = useState<any[]>([]);
  const [droppedCards, setDroppedCards] = useState<any[]>([]);
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

  // card drop zone
  const [{ isOverCards }, cardsDrop] = useDrop(() => ({
    accept: ['CARD'],
    drop: (item: { id: string; type: string }) => {
      setDroppedCards((prev) => [...prev, item]);
    },
    collect: (monitor) => ({
      isOverCards: monitor.isOver(),
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
      <Nav></Nav>
        {droppedHeaders.map((item, index) => (
          <Header key={index} title={`Header ${index + 1}`} id={item.id} />
        ))}
      </div>

      {/* Cards Drop Zone */}
      <div className={`button-drop-zone ${isOverCards ? 'over' : ''}`} ref={cardsDrop} style={{display:"flex",justifyContent:"center"}}>
      <Centerpage />
        {droppedCards.map((item, index) => (
          <Card key={index} id={item.id} title={`Card ${index + 1}`} content="This is a card Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque !"  />
        ))}
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
