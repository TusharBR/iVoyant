import { useCallback, useState } from "react";

interface EditableFieldProps {
    text: string;
    onUpdate: (newText: string) => void;
    className?: string;
    style?: React.CSSProperties;
  }
const EditableField: React.FC<EditableFieldProps> = ({ text, onUpdate, className }) => {
    console.log("button classname",className)
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
  
    return isEditing ? 
    
    (
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

export default EditableField