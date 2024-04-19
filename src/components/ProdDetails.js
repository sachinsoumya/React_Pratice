import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProd from "../utils/useProd";
import CartValue from "../utils/CartContext";
const ProdDetails = () => {
  // const [prodDetails, setProdDetails] = useState("");

  const p = useParams();
  const { prodId } = p;

  const prodDetails = useProd(prodId);

  const { cart, setProdCart } = useContext(CartValue);

  console.log(cart);

  console.log("data coming from hook");

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
          Add to cart
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProdDetails;
