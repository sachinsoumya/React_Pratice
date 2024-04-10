import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProd from "../utils/useProd";
const ProdDetails = () => {
  // const [prodDetails, setProdDetails] = useState("");
  const p = useParams();
  const { prodId } = p;

  const prodDetails = useProd(prodId);

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

  return prodDetails ? (
    <div>
      <img src={prodDetails.image} alt="product image" />
      <h3>{prodDetails.title}</h3>
      <h4>{prodDetails.price}</h4>
      <h4>{prodDetails.description}</h4>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ProdDetails;
