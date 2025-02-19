import React, { useState } from 'react';

interface HeaderProps {
  title: string;
  brief?: string;
  id: string;
  deletebtn1:(id:string)=>void
}

const Header = ({ title, brief = "A brief about this section",deletebtn1,id }:HeaderProps) => {


  const [isEditing, setIsEditing] = useState(false);
  const [isEditingbreif, setIsEditingbreif] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newbrief, setNewbrief] = useState(brief);

  const handleTitleClick = () => {
    setIsEditing(true);
  };
  const handlebreifClick = () => {
    setIsEditingbreif(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };
  const handlebreifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewbrief(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handlebreifBlur = () => {
    setIsEditingbreif(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTitle.trim()!=='') {

      setIsEditing(false);
    }
  };
  const handlebreifKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newbrief.trim()!=='') {

      setIsEditingbreif(false);
    }
  };
console.log(title,id,"header")
  return (
    <div className='header' onDoubleClick={()=>deletebtn1(id)}>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleTitleKeyDown}
          className="header-input"
          style={{ 
          backgroundColor:"#1e293b",color:"white",fontFamily:"sans-serif",fontSize:"20px",fontStyle:"bold"}}
        />
      ) : (
        <h1 className="header-title" onClick={handleTitleClick}>
          {newTitle}
        </h1>
      )}

{isEditingbreif ? (
        <input
          type="text"
          value={newbrief}
          onChange={handlebreifChange}
          onBlur={handlebreifBlur}
          onKeyDown={handlebreifKeyDown}
          className="header-input"
          style={{ 
          backgroundColor:"#1e293b",color:"white",fontFamily:"sans-serif",fontSize:"20px",fontStyle:"bold"}}
        />
      ) : (
        
        <p className="header-brief" onClick={handlebreifClick}>{newbrief}</p>
      )}

      
    </div>
  );
};

export default Header;
