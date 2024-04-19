import MenuCard, { AddedTrending } from "./MenuCard";
import useOnlineStatus from "../utils/useOnlineStatus";

import { useEffect, useState , useContext } from "react";
import { Link } from "react-router-dom";
import UserData from "../utils/UserContext";

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

  const TrendingMenuCard = AddedTrending(MenuCard);
  console.log(TrendingMenuCard());

  const data = useContext(UserData);

  console.log(data);

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

  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus + "rendering");

  if (onlineStatus === false) {
    return (
      <div>
        <h1>Sorry...it seeams you are offline !</h1>
      </div>
    );
  }

  return product.length === 0 ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : filterItems.length !== 0 ? (
    <>
      {" "}
      {/* <input type="text" placeholder="search" name="search" /> */}
      <div className="flex sm:justify-center lg:justify-start  p-4 ">
        <button
          className="px-3 border border-black bg-yellow-200 text-black  rounded-lg"
          onClick={() => {
            const filteredProd = filterItems.filter(
              (prod) => prod.rating.rate > 4
            );
            setFilterItems(filteredProd);
          }}
        >
          Filter-out
        </button>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e.target.value);
          }}
          className="border border-slate-600 ml-2 rounded-md"
        />

        {/* <div>{console.log(document.querySelector('input').value)}</div> */}
        <button
          className="border border-black bg-yellow-200 text-black p-1 ml-2 rounded-lg"
          onClick={() => {
            const searchResult = product.filter((prod) =>
              prod.title.toLowerCase().includes(value)
            );
            value !== ""
              ? searchResult.length
                ? setFilterItems(searchResult)
                : setFilterItems(product)
              : setFilterItems(product);
          }}
        >
          Search
        </button>

      <button className="border border-black p-3 mx-2 rounded-sm" onClick={()=>data.setUserName("Ram")}>

        Click here to see magic {console}

      </button>

      </div>
      <div className="grid lg:grid-cols-4 gap-4 px-2 justify-items-center md:grid-cols-3 sm:grid-cols-1 my-3">
        {/* <MenuCard prodData = {data[0]} />
        <MenuCard prodData = {data[1]} />
        <MenuCard  prodData = {data[2]}/>
        <MenuCard prodData = {data[3]}/>
        <MenuCard prodData = {data[4]}/>
        <MenuCard prodData = {data[5]}/>  console.log(searchResult.length) */}

        {filterItems.map((prod, index) => {
          return prod.rating.rate > 4 ? (
            <Link to={"/product/" + prod.id} key={prod.id}>
              <TrendingMenuCard prodData={prod}  />
            </Link>
          ) : (
            <Link to={"/product/" + prod.id} key={prod.id}>
              <MenuCard prodData={prod}  />
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <div>
      <h1>No items found</h1>
    </div>
  );
};

// console.log("Hello module");

export default CardContainer;
