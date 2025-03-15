import { useState } from "react";
import EditableField from "./EditableField";

interface CardProps {
  title: string;
  content: string;
  id: string;
  deletebtn3: (id: string) => void;
}

const Card = ({ title, content, deletebtn3, id }: CardProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  return (
    <div className="card" onDoubleClick={() => deletebtn3(id)}>
      <div className="card-content">
        <EditableField text={newTitle} onUpdate={setNewTitle} Element="h2" className="card-title" />
        <EditableField text={newContent} onUpdate={setNewContent} Element="span" className="card-category" />
        <p className="card-meta">
          <button className="cardButton" style={{ margin: "8px" }}>Read more...</button>
        </p>
      </div>
    </div>
  );
};

export default Card;
