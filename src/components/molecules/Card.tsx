import React, { useState, useCallback } from "react";

interface CardProps {
  title: string;
  content: string;
  id: string;
  deletebtn3:(id:string)=>void;
}

interface EditableFieldProps {
  text: string;
  onUpdate: (newText: string) => void;
  Element: "h2" | "span";
  className?: string;
  style?: React.CSSProperties;
}

const EditableField = ({ text, onUpdate, Element, className }:EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    if (inputValue.trim() !== "") {
      onUpdate(inputValue);
    }
    setIsEditing(false);
  }, [inputValue, onUpdate]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === "Enter" && inputValue.trim() !== "") {
        onUpdate(inputValue);
        setIsEditing(false);
      }
    },
    [inputValue, onUpdate]
  );

  return isEditing ? (
    className === "card-category" ? (
      <textarea
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className={className}
        style={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          fontFamily: "sans-serif",
          fontSize: "15px",
          width: "100%",
          minHeight: "90px",
          resize: "vertical",
        }}
      />
    ) : (
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className={className}
        style={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          fontFamily: "sans-serif",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          outline: "none",
          width: "100%",
        }}
      />
    )
  ) : (
    <Element className={className} onClick={handleClick} >
      {text}
    </Element>
  );
};

const Card = ({ title, content,deletebtn3,id }: CardProps) => {
  

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  return (
    <div className="card" onDoubleClick={()=>deletebtn3(id)}>
      <div className="card-content">
        <EditableField text={newTitle} onUpdate={setNewTitle} Element="h2" className="card-title" style={{ fontSize: "20px", fontWeight: "bold" }} />
        <EditableField text={newContent} onUpdate={setNewContent} Element="span" className="card-category" style={{ fontSize: "13px", color: "#666" }} /> 
        <p className="card-meta">
          <button style={{ margin: "10px" }}>Read more...</button>
        </p>
      </div>
    </div>
  );
};

export default Card;
