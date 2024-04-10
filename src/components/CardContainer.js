import MenuCard from "./MenuCard";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

console.log("Hello module");

const CardContainer = () => {
  //* State variable - Super powerful variable(i.e this )

  // console.log(useState([]));

  // const arr = useState(data);

  // console.log(arr[0]);
  // console.log(arr[1]);

  const [product, setProduct] = useState([]);

  const [value, setValue] = useState("");

  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    // console.log("Hello useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");

    const json = await data.json();

    setProduct(json);

    setFilterItems(json);
  };

  console.log("First Rendering");

  // let product1 = [];

  //* Conditional Rendering - component rendering happens with a condition is called conditional rendering .
  // if(product.length ===0){
  //   return <div>
  //      <h1>Loading ....</h1>
  //   </div>
  // }

  const onlineStatus  = useOnlineStatus();

  console.log(onlineStatus + "rendering");

  if(onlineStatus===false) {
    return (
       <div>
        <h1>Sorry...it seeams you are offline !</h1>
       </div>
    )
  }

  return product.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : filterItems.length !==0 ? (
    <>
     
      {" "}
      {/* <input type="text" placeholder="search" name="search" /> */}
     
      <button
        onClick={() => {
          const filteredProd = filterItems.filter((prod) => prod.rating.rate > 4);
          setFilterItems(filteredProd);
        }}
      >
        Filter-out
      </button>
      <input type="text" value={value} onChange={(e)=>{setValue(e.target.value); console.log(e.target.value)}}/>
      
      {/* <div>{console.log(document.querySelector('input').value)}</div> */}
      <button
        onClick={() => {
          const searchResult = product.filter((prod) =>
            prod.title.toLowerCase().includes(value)
          );
          value !=="" ? searchResult.length ?setFilterItems(searchResult):setFilterItems(product): setFilterItems(product);
        }}
      >
        Search
      </button>
      <div className="card-container">

        {/* <MenuCard prodData = {data[0]} />
        <MenuCard prodData = {data[1]} />
        <MenuCard  prodData = {data[2]}/>
        <MenuCard prodData = {data[3]}/>
        <MenuCard prodData = {data[4]}/>
        <MenuCard prodData = {data[5]}/>  console.log(searchResult.length) */}

        {filterItems.map((prod, index) => {
          return <Link to={"/product/"+prod.id} key={prod.id}><MenuCard prodData={prod}  /></Link>;
        })}
      </div>
    </>
  ): (
    <div>
      <h1>No items found</h1>
    </div>
  );
};

// console.log("Hello module");

export default CardContainer;
