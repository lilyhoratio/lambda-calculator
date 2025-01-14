import React, {useState} from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
// import {operators} from "./../../../data.js";

const Operators = (props) => {
  // STEP 2 - add the imported data to state

  // const [operatorsArr, setOperator] = useState(operators);
  // console.log("operators array", operatorsArr)

  return (
    <div className="right-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      // operatorsArr.map(operator => (<OperatorButton operatorChar={operator.char} operatorValue={operator.value}/>))
      props.operatorsArr.map(operator => (<OperatorButton {...operator}/>))
      
      }
    </div>
  );
};

export default Operators;