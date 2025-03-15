import React, { useState } from "react";

interface EditableFieldProps {
  text: string;
  onUpdate: (newText: string) => void;
  Element: "h2" | "span";
  className?: string;
}

const EditableField = ({ text, onUpdate, Element, className }: EditableFieldProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleClick = () => setIsEditing(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };
  const handleBlur = () => {
    if (inputValue.trim() !== "") {
      onUpdate(inputValue);
    }
    setIsEditing(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      onUpdate(inputValue);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return className === "card-category" ? (
      <textarea
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className={className}
        style={{
          backgroundColor: "rgb(39, 103, 232)",
          color: "white",
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
          backgroundColor: "rgb(39, 103, 232)",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "18px",
          border: "1px solid white",
          outline: "none",
          width: "100%",
        }}
      />
    );
  }

  return (
    <Element className={className} onClick={handleClick}>
      {text}
    </Element>
  );
};

export default EditableField;
