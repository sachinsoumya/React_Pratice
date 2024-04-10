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
        <div className="doFlex">
          <img
            src={LOGO}
            alt="amazon_logo"
          />
  
          <div className="nav-items">
            <ul>
              <li>{onlineStatus? "✅" : "🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>Cart</li>
              <button onClick={()=>{ btnName==="Login"? setBtnName('Log-out')  : setBtnName('Login')}}>{btnName}</button>
              
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header