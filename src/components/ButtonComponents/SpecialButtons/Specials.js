import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
// import {specials} from "./../../../data.js";

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  // const [specialsArr, setSpecials] = useState(specials);

  return (
    <div className="special-button-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      props.specialsArr.map(special => (<SpecialButton special={special}/>))
       }
    </div>
  );
};

export default Specials;