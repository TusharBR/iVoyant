import React from 'react';
import LeftContainer from '../organisms/LeftContainer';
import MainContainer from '../organisms/MainContainer';

const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <LeftContainer />
      <MainContainer />
    </div>
  );
};

export default AppLayout;
