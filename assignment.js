import React from "react";
import ReactDOM from "react-dom/client";
import { IoLogoFlickr } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
/**
 * Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
 */

// const titleElement = React.createElement("div", { className: "title" }, [
//   React.createElement(
//     "h1",
//     { id: "h1" },
//     React.createElement(
//       "h2",
//       { id: "h2" },
//       React.createElement(
//         "h3",
//         { id: "h3" },
//         "This is inside h3 which is inside h2 and h2 is inside h1"
//       )
//     )
//   ),
// ]);

/**
 * Create the same element using JSX

 */

// const titleElement = (
//   <div className="title">
//     <h1>
//       <h2>
//         <h3>This is h3 inside h2, which is inside h1, with jsx</h3>
//       </h2>
//     </h1>
//   </div>
// );
/**
 * Create a functional component of the same with JSX
 */

const TitleElement = function () {
  return (
    <div className="title">
      <h1>
        <h2>
          <h3 className="h3" color="blue">
            H3 inside h2, which is inside h1, with component
          </h3>
        </h2>
      </h1>
    </div>
  );
};

/**Composition of Component(Add a component inside another)
 */

// const NavBar = function () {
//   return (
//     <div className="navbar">
//       <TitleElement />
//       <h3>This is inside navbar</h3>
//     </div>
//   );
// };

/**Create a Header Component from scratch using Functional Components with
JSX
○ Add a Logo on left
○ Add a search bar in middle
○ Add User icon on right
○ Add CSS to make it look nice
 */

const Header = function () {
  return (
    <div className="header">
      <ul className="lists">
        <li className="nav-item">
          <IoLogoFlickr />
        </li>
        <li className="nav-item">
          <input id="search" type="textarea" placeholder="search here" />
          <button id="btn">
            <IoIosSearch />
          </button>
        </li>
        <li className="nav-item">
          <FaRegUserCircle />
        </li>
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
