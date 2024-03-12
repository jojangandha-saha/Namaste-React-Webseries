import React from "react";
import ReactDOM from "react-dom/client";
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React from JS";
// const rootElem = document.getElementById("root");
// root.appendChild(heading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "This is namaste react"),
//     React.createElement("h2", {}, "This is h2 inside child1"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is h1 inside child2"),
//     React.createElement("h2", {}, "This is h2 inside child2"),
//   ]),
// ]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React from React"
// );

// const root = ReactDOM.createRoot(rootElem);
// root.render(parent);

//React Elements -> equivalant to dom elements
//React.createElement -> returns an object

//creating react element using react.createElement
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

//JSX - javascript xml
// const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;

// const pi = 3.14;
// const element = <span>Another React element </span>;
// const title = (
//   <h3 className="titleEl">
//     {/* {element} */}
//     This is a title element
//   </h3>
// );
//React Components
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       {element}

//       {/* {Title()  } we can also call this component */}
//       <Title />
//       {/* {title} */}
//       {`PI value: ${pi}`}
//       <h2> Namaste React functional componenet</h2>
//     </div>
//   );
// };

// const Title = () => {
//   return <h1>This is a title</h1>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
