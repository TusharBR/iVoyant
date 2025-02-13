import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/templates/AppLayout';
import './App.css';
import './Navbar.css';
import './card.css';
import Navbar from './components/organisms/Navbar';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
<Navbar/>
      <AppLayout />
    </DndProvider>
  );
};

export default App;
