import React from "react";

//take button as prop and return button element

const NumberButton = (props) => {
  console.log("props", props)
  return (
    // <button className="calc-button number-button" onClick={()=> props.addNumber(props.number)}>
    <button className="calc-button number-button" onClick={()=> console.log(props.number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number}
    </button>
  );
};

export default NumberButton;