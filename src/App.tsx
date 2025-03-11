import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/templates/AppLayout';
import './App.css';
import './Navbar.css';
import './card.css';
import './Footer.css';
import './Header.css';
import Navbar from './components/organisms/Navbar';
import { useState } from 'react';

const App =() => {
  const [toggle,settoggle]=useState(true);
  const [responsiveState,setresponsiveState]=useState({resize:false,size:"95%"});
  function handleSize(obj:{resize:boolean,size:string})
  {
    setresponsiveState(obj)
  }
  function handleToggle()
  {
    settoggle(!toggle)
  }
  return (
    <DndProvider backend={HTML5Backend}>
<Navbar handleToggle={handleToggle}/>

      <AppLayout toggle={toggle} responsiveState={responsiveState} handleSize={handleSize}/>
    </DndProvider>
  );
};

export default App;
