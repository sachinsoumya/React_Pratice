import { useState } from "react";
import { LOGO } from "../utils/constant";
const Header = () => {
  let btn = "Login"

  const [btnName , setBtnName] = useState(btn);


    return (
      <div className="header">
        <div className="doFlex">
          <img
            src={LOGO}
            alt="amazon_logo"
          />
  
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Cart</li>
              <button onClick={()=>{ btnName==="Login"? setBtnName('Log-out') : setBtnName('Login')}}>{btnName}</button>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header