import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "./../../../data.js";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersArr, setNumber] = useState(numbers);

  // console.log(props.addNumber)
  return (
    <div className="number-button-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      numbersArr.map(number => (
        // Add key because React wants a key to refer to each component implementation
        <NumberButton key={number} number={number}/> 
        // <NumberButton number={number} />
      ))
      //  same as this in vanilla JS:
      //  numbers.map(number => NumberButton(number))}
      }
    </div>
  );
};

export default Numbers;