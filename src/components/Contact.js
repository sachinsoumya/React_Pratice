import { useEffect, useState } from "react";
import Team from "./Team";
import ProdCategory from "./ProdCategory";
import { contact } from "../utils/mock";


//parent componet for controlled and uncontrolled concept
const Contact = () => {
  const [showIndex, setShowIndex] = useState(0);
  const con = {
    name: "Abc",
    TechStack: ["Java", "Aws", "Spring", "Hyber"],
  };

  useEffect(() => {
    console.log("hello contact");
    // const timer = setInterval(()=>{
    //     console.log("hii contact")
    // },1000)

    // return ()=>{

    //     clearInterval(timer);

    //     console.log("useEffect returned");
    //    }
  });

  return (
    <div>
      <h1>Contact us</h1>
      <Team {...con} />
      <div className="flex justify-center">
        <div className="w-6/12">
          {contact.map((item, index) => {
            return (
              <ProdCategory
                {...item}
                key={index}
                showMember={index === showIndex ? true : false}
                setShowIndex = {(showMember)=> showMember===true ? setShowIndex(null) : setShowIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
