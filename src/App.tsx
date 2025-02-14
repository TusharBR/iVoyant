import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/templates/AppLayout';
import './App.css';
import './Navbar.css';
import './card.css';
import './Footer.css';
import './Header.css';
import Navbar from './components/organisms/Navbar';

const App =() => {
  return (
    <DndProvider backend={HTML5Backend}>
<Navbar/>

      <AppLayout />
    </DndProvider>
  );
};

export default App;
