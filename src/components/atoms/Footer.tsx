import React, { useState, useCallback } from "react";

interface FooterProps {
  content: string;
  id: string;
  deletebtn2: (id1:string) => void; // Added delete function prop
}

interface EditableFieldProps {
  text: string;
  onUpdate: (newText: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const EditableField: React.FC<EditableFieldProps> = ({ text, onUpdate, className }) => {
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
        outline: "groove",
      }}
    />
  ) : (
    <p className={className} onClick={handleClick}>
      {text}
    </p>
  );
};

const Footer = ({ content, id,deletebtn2  }: FooterProps) => {
  const [footerContent, setFooterContent] = useState(content);
console.log("my id in footer is",id)
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="footer"
      style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
      onDoubleClick={()=>{deletebtn2(id)}} 
    >
      <EditableField text={footerContent} onUpdate={setFooterContent} className="footer-content" />
      <span>&copy; &nbsp; All rights reserved.</span>
      <span>{currentDate}</span>
    </div>
  );
};

export default Footer;
