import { useContext } from "react";
import UserData from "../utils/UserContext";

const Grocery = () => {

  const {loggedinUser} = useContext(UserData);

  return (
    <div>
      <h1>This is Grocery Store {loggedinUser}</h1>
    </div>
  );
};

export default Grocery ;
