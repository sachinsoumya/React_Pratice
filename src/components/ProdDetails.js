import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProd from "../utils/useProd";
import CartValue from "../utils/CartContext";

import { useDispatch } from "react-redux";

import { addItem} from "../utils/cartSlice";




const ProdDetails = () => {
  // const [prodDetails, setProdDetails] = useState("");

  const p = useParams();
  const { prodId } = p;

  const prodDetails = useProd(prodId);

  const { cart, setProdCart } = useContext(CartValue);

  const dispatch = useDispatch();

  console.log(cart);

  console.log("data coming from hook");

  

  console.log(dispatch);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(`https://fakestoreapi.com/products/${prodId}`);
  //   const json = await data.json();

  //   console.log(data);

  //   console.log(json);

  //   setProdDetails(json);

  // };

  const addCart = (prod) => {
    
    cart.push(prod);
    // console.log(cart);
    const arr = [...cart]
    setProdCart(arr);
  };

  const handleClick = (prod)=>{

    dispatch(addItem(prod))
    // addCart(prod) = >{  type : 'cart/addCart' ,payload : prod}
      


  }

 

  

  return prodDetails ? (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-1 ">
      <div className="w-7/12 h-auto">
        <img src={prodDetails.image} alt="product image" />
      </div>

      <div>
        <div className="font-bold text-xl">{prodDetails.title}</div>
        <div className="font-bold">Rating - {prodDetails.price}</div>
        <div className="font-semibold">{prodDetails.description}</div>
        <button
          className="p-2 text-black rounded-md bg-slate-600 font-semibold"
          onClick={() => addCart(prodDetails.title)}
        >
          Add to context cart
        </button>

        <button className="p-2 text-black rounded-md bg-slate-600 font-semibold mx-2" onClick={()=>handleClick(prodDetails)}>Add to redux cart</button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProdDetails;
