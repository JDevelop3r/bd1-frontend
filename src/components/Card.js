import React from "react";

import "./styles/Card.css";

const Card = (props) => {
  return (
    <div className={`Card my-3 ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
