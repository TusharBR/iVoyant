
import React from 'react';
import Card from '../molecules/Card';
import Button from '../atoms/Button';

const LeftContainer: React.FC = () => {
  return (
    <div className="left-container">
      <Card title="Card 1" content="This is the content of Card 1." />
      <Card title="Card 2" content="This is the content of Card 2." />
      <Button onClick={() => alert('Left Container Button clicked!')}>Left Container Button</Button>
    </div>
  );
};

export default LeftContainer;
