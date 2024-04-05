import { useEffect, useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
const Header = () => {
  let btn = "Login"

  const [btnName , setBtnName] = useState(btn);



  useEffect(()=>{

    console.log("Callback inside useEffect is called");

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