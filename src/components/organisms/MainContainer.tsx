import { useState } from 'react';
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

  console.log(droppedHeaders,"From maincontainer")

  function deletebtn1(id: string) {
    console.log("double clicked, id is - ", id);
    setDroppedHeaders(droppedHeaders.filter((item) => item.ki !== id));
    // console.log("dh",droppedHeaders)
  }
  function deletebtn2(id: string) {
    console.log("double clicked, id is footer - ", id);
    setDroppedFooters(droppedFooters.filter((item) => item.ki !== id));
    // console.log("dh",droppedHeaders)
  }
  function deletebtn3(id: string) {
    console.log("double clicked, id is footer - ", id);
    setDroppedButtonsAndCards(droppedButtonsAndCards.filter((item) => item.ki !== id));
    // console.log("dh",droppedHeaders)
  }

  // header Drop zone
  const [{ isOverHeader }, headerDrop] = useDrop(() => ({
    accept: ['HEADER'],
    drop: () => {
      const btnno = getUniqueNumber()
      const newId = nanoid(); 
      setDroppedHeaders((prev) => [...prev, { ki: newId, val: `Header ${btnno}` }]);
    },
    collect: (monitor) => ({  
      isOverHeader: monitor.isOver(),
    }),
  }));

  // btns and card drop zone
  const [{ isOverButtonsAndCards }, buttonsAndCardsDrop] = useDrop(() => ({
    accept: ['BANNER', 'CARD'],
    drop: (item: { id: string; type: string }) => {
      const btnno = getUniqueNumber()
      const newId = nanoid(); 
      setDroppedButtonsAndCards((prev) => [...prev,  { ki: newId, val: `${item.type} - ${btnno}`,type:item.type }]);
    },
    collect: (monitor) => ({
      isOverButtonsAndCards: monitor.isOver(),
    }),
  }));

  // footer drop zone
  const [{ isOverFooter }, footerDrop] = useDrop(() => ({
    accept: ['FOOTER'],
    drop: () => {
      const btnno = getUniqueNumber()
      const newId = nanoid(); 
      setDroppedFooters((prev) => [...prev, { ki: newId, val: `Footer ${btnno}` }]);
      console.log("hii i am",droppedFooters)
    },
    collect: (monitor) => ({
      isOverFooter: monitor.isOver(),
    }),
  }));

  return (
    <div className="main-container">
      
      <div className={`header-drop-zone ${isOverHeader ? 'over' : ''}`} ref={headerDrop}>
      <Nav></Nav>
        {droppedHeaders.map((item) => (
          <Header key={item.ki} title={item.val} id={item.ki} deletebtn1={deletebtn1}/>
        ))}
      </div>

      {/* Buttons and Cards Drop Zone */}
      <div className={`button-drop-zone ${isOverButtonsAndCards ? 'over' : ''}`} ref={buttonsAndCardsDrop} style={{display:"flex",justifyContent:"center"}}>
      <Centerpage />
        {droppedButtonsAndCards.map((item) =>
          item.type === 'BANNER' ? (
           <Newsletter  key={item.ki} id={item.ki} title={item.val}  deletebtn3={deletebtn3}/>
          ) : (
            <Card key={item.ki} id={item.ki} title={item.val} deletebtn3={deletebtn3} content="This is a card Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati itaque !"  />
          )
        )}
      </div>

      {/* Footer Drop Zone */}
      <div className={`footer-drop-zone ${isOverFooter ? 'over' : ''}`} ref={footerDrop}>
        {droppedFooters.map((item) => (
          <Footer key={item.ki} content={item.val} id={item.ki} deletebtn2={deletebtn2}/>
        ))}
        
      </div>
    </div>
  );
};

export default MainContainer;
