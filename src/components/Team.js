import { useState } from "react";

const Team = (props) => {
    const [FirstCount , setFirstCount] = useState(0);
    const [SecondCount , setSecondCount] = useState(1);
    
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h1>Name:{props.name}</h1>
      <h2>Count : {FirstCount}</h2>
      <h2>Second Count : {SecondCount}</h2>
      <h2>Designation:Developer</h2>
      <h3>Social Media : {props.social}</h3>
      
    </div>
  );
};

export default Team;
