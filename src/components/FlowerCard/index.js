import React from "react";
import "./style.css";

function FlowerCard(props) {
  return (
    // <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.value}
          />
          <span className="Shuffle" onClick={() => props.flowerClick(props.flowerId)}></span>
      </div>
     
  )}

  export default FlowerCard;