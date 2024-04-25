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

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ProdDetails from "./components/ProdDetails";

import { Error } from "./components/Error";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocerry";
import { lazy } from "react";
import UserData from "./utils/UserContext";
import CartValue from "./utils/CartContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Demo from "./components/Demo";

// import Contact from "./components/Contact";
// import About from "./components/About";
// import { Error } from "./components/Error";

const AppParent = () => {
  const [userName, setUserName] = useState();
  const [prodCart, setProdCart] = useState([]);

  useEffect(() => {
    //we make an api call for authentication

    const data = {
      name: "Sachin",
    };

    setUserName(data.name);
  }, []);

  return (
    <div>
      {/* <UserData.Provider value={{ loggedinUser: userName, setUserName }}>
        <Header />
      </UserData.Provider>
      <UserData.Provider value={{ loggedinUser: userName , setUserName}}>
        <Outlet />
      </UserData.Provider> */}

      <Provider store={appStore}>
        <CartValue.Provider value={{ cart: prodCart, setProdCart }}>
          <Header />
          <Outlet />
        </CartValue.Provider>
        <Footer />
      </Provider>
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocerry"));

// const About = lazy(()=> import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppParent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/app",
            element: (
              <div>
                <h1>Here it is about app</h1>
              </div>
            ),
          },
          {
            path: "/about/team",
            element: (
              <div>
                <h1>Here it is about team</h1>
              </div>
            ),
          },

         
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/product/:prodId",
        element: <ProdDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loding....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/demo",
        element:<Demo />
      }
    ],

    errorElement: <Error />,
  },
]);

const AppLayout = () => {
  return (
    <div>
      {/* <Header />
      <Outlet />
      <Footer /> */}

      <RouterProvider router={appRouter} />
    </div>
  );
};

// console.log(appRouter);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
