import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}<span className="Shuffle" onClick={() => props.flowerClick(props.flowerId)}></span></div>;
}

export default Wrapper;
