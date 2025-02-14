import React, { useState, useCallback } from "react";
import { useDrag } from "react-dnd";

interface FooterProps {
  content: string;
  id: string;
}

interface EditableFieldProps {
  text: string;
  onUpdate: (newText: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const EditableField: React.FC<EditableFieldProps> = ({ text, onUpdate, className, style }) => {
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
      className="footer-input"
      style={{
        backgroundColor: "#1e293b",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "14px",
        fontWeight: "bold",
        outline:"groove",
      }}
    />
  ) : (
    <p className={className} onClick={handleClick} style={style}>
      {text}
    </p>
  );
};

const Footer = ({ content, id }: FooterProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FOOTER",
    item: { id, type: "FOOTER" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [footerContent, setFooterContent] = useState(content);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      ref={drag}
      className={`footer ${isDragging ? "dragging" : ""}`}
      style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
    >
      <EditableField text={footerContent} style={{color:"white"}} onUpdate={setFooterContent} className="footer-content" />

      <span>&copy; &nbsp; All rights reserved.</span>
      <span>{currentDate}</span>
    </div>
  );
};

export default Footer;
