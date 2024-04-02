/**  
 *<div id='parent' >
    <div id="child">
      <h1>I love you</h1>
    </div>     
    <div id="child2">
      <h1>I love you</h1>
    </div>     
 </div>
 * 
 */
//JSX is not exactly html its html like syntax
//* JSX =>React.createElement =>ReactElement(JS object)=>HTML

/**
 * Header
     *Logo
     *Nav-Item
 * Body
     *Search bar
     *Restaurant-container

 * Foter
     *copyright
     *links 
 */

import React from "react";
import ReactDOM from "react-dom/client";
import  "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Footer } from "./components/Footer";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};












const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
