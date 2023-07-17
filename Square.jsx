import React from "react";

function Square(props) {
  return (
    <div onClick={props.onClick}
      style={{ border: " 1px solid black", height: "100px",
       width: "100%",
    display:"flex",
    justifyContent:"center"
 }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
}

export default Square;
