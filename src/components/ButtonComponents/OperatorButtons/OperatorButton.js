import React from "react";

const OperatorButton = (props) => {

  console.log("OPERATORS", props)
  return (
    <button className="calc-button operator-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.operatorChar}
    </button>
  );
};

export default OperatorButton;