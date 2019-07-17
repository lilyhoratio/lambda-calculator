import React from "react";

// const OperatorButton = (props) => {
const OperatorButton = ({char,value}) => {
  // const key = char;
  
  return (
    <button className="calc-button operator-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* {props.operatorChar} */}
      {char}
    </button>
  );
};

export default OperatorButton;