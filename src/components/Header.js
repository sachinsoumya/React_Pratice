import { useContext, useEffect, useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserData from "../utils/UserContext";
import CartValue from "../utils/CartContext";
import { useSelector } from "react-redux";

const Header = () => {
  let btn = "Login"

  const [btnName , setBtnName] = useState(btn);

  const onlineStatus = useOnlineStatus();

  const {loggedinUser} = useContext(UserData);

  const { cart, setProdCart } = useContext(CartValue);

  console.log(cart);

  const cartItems = useSelector((store)=>store.cart.items);

 

  console.log(cartItems);

  // console.log(loggedinUser);

  // console.log(onlineStatus);

  console.log("Rendering");



  useEffect(()=>{

    // console.log("Callback inside useEffect is called");

  } , []) ;




    return (
      <div className="header">
        <div className="flex flex-row justify-between p-2">
          <img
            src={LOGO}
            alt="amazon_logo"
            className="w-12"
          />
  
          <div className="w-[800px]">
            <ul className="flex justify-between">
              <li>{onlineStatus? "✅" : "🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to ="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
              <li>{cart.length}Context Cart</li>
              <li>{cartItems.length}Redux Cart</li>
              <li className="font-bold">{loggedinUser}</li>
             
              <button onClick={()=>{ btnName==="Login"? setBtnName('Log-out')  : setBtnName('Login')}} className="mx-2.5 my-0 border-solid border-2 border-slate-400 rounded-md p-0.5 bg-slate-300">{btnName}</button>
              
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default Header