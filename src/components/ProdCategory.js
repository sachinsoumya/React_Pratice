import { useState } from "react";
import Member from "./Member";
const ProdCategory = ({ name, TechStack, showMember, setShowIndex }) => {
  // const [showMember , setShowMember] = useState(false);

  //Child component for controlled and uncontrolled component 
  const handleClick = (e) => {
    console.log(e.type + " " + e.target);

    setShowIndex(showMember) ;

    // setShowMember(!showMember?true:false);
  };

  return (
    <div>
      <div
        className="font-bold bg-slate-300 flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span>{name}</span> <span>⬇️ </span>
      </div>

      {showMember && TechStack.map((item, index) => {
        return  <Member skill={item} key={index} />;
      })}
    </div>
  );
};

export default ProdCategory;
