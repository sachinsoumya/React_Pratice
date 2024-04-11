import { useEffect, useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  let btn = "Login"

  const [btnName , setBtnName] = useState(btn);

  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus);



  useEffect(()=>{

    // console.log("Callback inside useEffect is called");

  } , []) ;




    return (
      <div className="header">
        <div className="flex flex-row justify-between">
          <img
            src={LOGO}
            alt="amazon_logo"
            className="w-12"
          />
  
          <div className="w-96">
            <ul className="flex justify-between">
              <li>{onlineStatus? "✅" : "🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
              <li>Cart</li>
              <button onClick={()=>{ btnName==="Login"? setBtnName('Log-out')  : setBtnName('Login')}} className="mx-2.5 my-0 border-solid border-2 border-slate-400 rounded-md p-0.5 bg-slate-300">{btnName}</button>
              
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header