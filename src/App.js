import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestarurantMenu from "../components/RestaurantMenu";
// import ResturantCards

const AppLayout = function () {
  return (
    <>
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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// direct applayout render
//router provider
root.render(<RouterProvider router={appRouter} />);
