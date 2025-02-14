import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Card from '../molecules/Card';
import Nav from '../organisms/Nav';
import Centerpage from './Centerpage';
import Newsletter from '../organisms/NewsLetter';
import { createUniqueRandomGenerator } from "../../components/atoms/Random";
import { nanoid } from "nanoid";

const getUniqueNumber = createUniqueRandomGenerator(0, 100); 

const MainContainer= () => {
  const [droppedHeaders, setDroppedHeaders] = useState<any[]>([]);
  const [droppedButtonsAndCards, setDroppedButtonsAndCards] = useState<any[]>([]);
  const [droppedFooters, setDroppedFooters] = useState<any[]>([]);

  useEffect(() => {
    console.log(droppedHeaders,"headers")
    console.log(droppedHeaders,"state")
  
    
  }, [droppedHeaders])
  

  function deletebtn(id: string) {
    console.log("double clicked, id is - ", id);
    setDroppedHeaders(droppedHeaders.filter((item) => item.ki !== id));
  }

  // header Drop zone
  const [{ isOverHeader }, headerDrop] = useDrop(() => ({
    accept: ['HEADER'],
    drop: () => {
      setDroppedHeaders((prev) => {
        const btnno = getUniqueNumber()
        const newId = nanoid(); 
        return [...prev, { ki: newId, val: `Header ${btnno}` }];
      });
    },
    collect: (monitor) => ({  
      isOverHeader: monitor.isOver(),
    }),
  }));

  // btns and card drop zone
  const [{ isOverButtonsAndCards }, buttonsAndCardsDrop] = useDrop(() => ({
    accept: ['BANNER', 'CARD'],
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
      <Nav></Nav>
        {droppedHeaders.map((item, index) => (
          <Header key={index} title={item.val} id={item.ki} deletebtn={deletebtn}/>
        ))}
      </div>

      {/* Buttons and Cards Drop Zone */}
      <div className={`button-drop-zone ${isOverButtonsAndCards ? 'over' : ''}`} ref={buttonsAndCardsDrop} style={{display:"flex",justifyContent:"center"}}>
      <Centerpage />
        {droppedButtonsAndCards.map((item, index) =>
          item.type === 'BANNER' ? (
           <Newsletter  key={index} id={item.id} title={index + 1}/>
          ) : (
            <Card key={index} id={item.id} title={`Card ${index + 1}`} content="This is a card Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque !"  />
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
