import React from "react";
import "../components/Card.css";

interface CardProps {
  title: string;
  price: string;
  company: string;
  logo: string;
  color?: string;
  size?: "small" | "medium" | "large";
  bgColor?: string;
}

const Card = ({ title, price, company, logo, color = "#000", size = "medium", bgColor = "#fff" }:CardProps) => {
  return (
    <div className={`maincard ${size}`} style={{ backgroundColor: bgColor, color }}>
      <p className="price-txt">{price}</p>
      <h2 className="title-txt">{title}</h2>
      <div className="sub-container">
        {logo && <img src={logo} alt={company} className="logo" />}
        <p className="company-txt">{company}</p>
      </div>
      <button className="view">View</button>
    </div>
  );
};

export default Card;
