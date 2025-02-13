import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppLayout from './components/templates/AppLayout';
import './App.css';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppLayout />
    </DndProvider>
  );
};

export default App;
