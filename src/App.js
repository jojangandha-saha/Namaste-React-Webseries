import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestarurantMenu from "../components/RestaurantMenu";
import Shimmer from "../components/Shimmer";
import UserContext from "../utils/UserContext";
// import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
// import InstaMart from "../components/InstaMart";
// import ResturantCards
//lazy loading - initially instamart code won't be bundled / loaded in to page
//on deamnd loading - whenever required we will load that page

//lazy - nmaed export
//main bundle & this lazy loaded bundle are separated
//import instamart using lazy loading
//dynamic import
// const Instamart = React.lazy(() => {
//   //import function
//   import("../components/InstaMart");
// });

// const About = lazy(() => {
//   import("../components/About");
// });
const AppLayout = function () {
  //authentication code written
  const [userName, setUserName] = useState();

  //how to pass this new context data to context

  // useEffect(() => {
  //   //make an API call & send username and password
  //   const data = {
  //     name: "Jojangandha Saha",
  //   };
  //   setUserName(data.name);
  // });
  return (
    <>
      {/* {providing new data to the context through context provider} */}
      {/* <UserContext.Provider value={{loggedInUser : userName}}> */}
      <div className="App">
        <Header />

        {/* push children according to routes
        if path = / -> <Body/>
        if path = /about -><About/> */}
        {/* outlet will be filled according to the 
      path we are on */}
        <Outlet />
        <Footer />
      </div>
      {/* </UserContext.Provider> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // :dynamicValue
        path: "/restaurants/:resId",
        element: <RestarurantMenu />,
      },
      // {
      //   path: "/instamart",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      // },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// direct applayout render
//router provider
root.render(<RouterProvider router={appRouter} />);
