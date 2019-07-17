import React from "react";

//take button as prop and return button element

const NumberButton = (props) => {
  // console.log("props", props.number)
  return (
    <button className="calc-button number-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */
      props.number}
    </button>
  );
};

export default NumberButton;