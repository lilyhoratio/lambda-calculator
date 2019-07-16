import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "./../../../data.js";

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersArr, setNumber] = useState(numbers);
  // const [numbers, setNumber] = useState(numbers) // mapping error later on because numbers is the import variable name

  console.log("numbers", {numbersArr});

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      numbersArr.map(number => (
        <NumberButton number={number} />
      ))
      //  same as this in vanilla JS:
      //  numbers.map(number => NumberButton(number))}
      }
    </div>
  );
};


export default Numbers;