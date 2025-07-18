import React from "react";
import "./index.css";

interface CardProps {
  handleClick?: () => void;
}

const Card: React.FC<CardProps> = ({ handleClick }) => {
  return <div onClick={handleClick}>Card</div>;
};

export default Card;
