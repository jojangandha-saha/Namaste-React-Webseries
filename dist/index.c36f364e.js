// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste React from JS";
const rootElem = document.getElementById("root");
// root.appendChild(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "This is h1 inside child1"),
        React.createElement("h2", {}, "This is h2 inside child1")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "This is h1 inside child2"),
        React.createElement("h2", {}, "This is h2 inside child2")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "Namaste React from React");
const root = ReactDOM.createRoot(rootElem);
root.render(parent);

//# sourceMappingURL=index.c36f364e.js.map
