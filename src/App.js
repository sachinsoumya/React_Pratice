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
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import ProdDetails from "./components/ProdDetails";

import { Error } from "./components/Error";
import { Footer } from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import Contact from "./components/Contact";
// import About from "./components/About";
// import { Error } from "./components/Error";

const AppParent = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

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
