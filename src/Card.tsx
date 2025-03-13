import  { useState } from "react";
import "./Card.css";

const Card: React.FC = () => {
  const [message, setMessage] = useState("Click a button");

  return (
    <div className="card" data-testid="card-component">
      <h1 data-testid="card-heading">Card Component</h1>
      <p data-testid="card-message">{message}</p>
      <button data-testid="btn-primary" onClick={() => setMessage("Primary clicked")}>Primary</button>
      <button data-testid="btn-secondary" onClick={() => setMessage("Secondary clicked")}>Secondary</button>
    </div>
  );
};

export default Card;