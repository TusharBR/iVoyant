import React, { useState, useCallback } from "react";

interface ButtonProps {
  deletebtn: (id:string) => void;
  id: string;
  content:string;
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
      className={className}
      style={{
        backgroundColor:" #007bff",
        color: "white",
        fontFamily: "sans-serif",
        fontSize: "14px",
       border:"1px solid white",
        textAlign: "center",
        width: "100%",
      }}
    />
  ) : (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {text}
    </span>
  );
};

const Button = ({ id,deletebtn,content}: ButtonProps) => {
    const [buttonText, setButtonText] = useState(content);

  return (
    <button
      style={{
        backgroundColor:" #007bff",
        color: "white",
        display: "inline-block",
        width: "100px",
        height: "40px",
        margin: "10px",
        cursor: "pointer",
        fontSize: "14px",
      }}
      
onDoubleClick={()=>deletebtn(id)}
    >
      <EditableField text={buttonText} onUpdate={setButtonText}/>
    </button>
  );
};

export default Button;
