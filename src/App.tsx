import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/templates/AppLayout';
import './styles/App.css';
import './styles/Navbar.css';
import './styles/card.css';
import './styles/Footer.css';
import './styles/Header.css';
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
