
import React from 'react';
import Button from '../atoms/Button';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <Button onClick={() => alert('Card clicked!')}>Click me</Button>
    </div>
  );
};

export default Card;
