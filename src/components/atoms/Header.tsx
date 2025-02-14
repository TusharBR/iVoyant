import React, { useState, useCallback } from "react";
import { useDrag } from "react-dnd";

interface HeaderProps {
  title: string;
  brief?: string;
  id: string;
}

interface EditableFieldProps {
  text: string;
  onUpdate: (newText: string) => void;
  Element: "h1" | "p";
  className?: string;
  style?: React.CSSProperties;
}

const EditableField: React.FC<EditableFieldProps> = ({ text, onUpdate, Element, className, style }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleBlur = useCallback(() => {
    if (inputValue.trim() !== "") {
      onUpdate(inputValue);
    }
    setIsEditing(false);
  }, [inputValue, onUpdate]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && inputValue.trim() !== "") {
        onUpdate(inputValue);
        setIsEditing(false);
      }
    },
    [inputValue, onUpdate]
  );

  return isEditing ? (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
      className="header-input"
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "20px",
        fontWeight: "bold",
        ...style,
      }}
    />
  ) : (
    <Element className={className} onClick={handleClick} style={style}>
      {text}
    </Element>
  );
};

const Header = ({ title, brief = "A brief about this section", id }: HeaderProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "HEADER",
    item: { id, type: "HEADER" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [newTitle, setNewTitle] = useState(title);
  const [newBrief, setNewBrief] = useState(brief);

  return (
    <div ref={drag} className={`header ${isDragging ? "dragging" : ""}`}>
      <EditableField
        text={newTitle}
        onUpdate={setNewTitle}
        Element="h1"
        className="header-title"
        style={{ fontSize: "24px", cursor: "pointer" }}
      />
      <EditableField
        text={newBrief}
        onUpdate={setNewBrief}
        Element="p"
        className="header-brief"
        style={{ fontSize: "16px", cursor: "pointer", color: "#ddd" }}
      />
    </div>
  );
};

export default Header;
