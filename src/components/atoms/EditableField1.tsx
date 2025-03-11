import React, { useCallback, useState } from 'react'

interface EditableFieldProps {
    text: string;
    onUpdate: (newText: string) => void;
    className?: string;
    style?: React.CSSProperties;
  }
  
  const EditableField1: React.FC<EditableFieldProps> = ({ text, onUpdate, className }) => {
    console.log("footer classname",className)
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
      <p className="footer-content" onClick={handleClick}>
        {text}
      </p>
    );
  };

export default EditableField1