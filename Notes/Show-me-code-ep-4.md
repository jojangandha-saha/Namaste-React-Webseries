● Is JSX mandatory for React?

- No, JSX is not mandetory to work with React, but it is a preferred and widely used approach because of its simplicity and readability. JSX is an optional syntax extension to JavaScript that allows you to write HTML in your JavaScript code. This makes it easier to create and maintain React components, as you can see how the HTML and JavaScript code will work together.

● Is ES6 mandatory for React?

- ES6 is not mandatory for React, but it is highly recommended. ES6 introduced many new features and syntax improvements that are widely used in modern JavaScript development, including React.

● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX

- The first way, {TitleComponent}, is the most concise and is often used when the component is a simple expression or variable. The second way, {<TitleComponent/>}, is more explicit and is often used when the component is returning a complex JSX value. The third way, {<TitleComponent></TitleComponent>}, is used when the component has child elements.

● How can I write comments in JSX?

- {/_ comments _/ }

● What is <React.Fragment></React.Fragment> and <></> ?

- React.Fragment is a special component that allows you to group a list of children without adding extra nodes to the DOM. This can be useful in a number of situations, such as when you need to return multiple elements from a component or when you need to group a list of elements that would otherwise be wrapped in a div. They both are same way of wrapping react elements inside fragments.

● What is Virtual DOM?

- A virtual DOM (Virtual Document Object Model) is a lightweight JavaScript representation of the Document Object Model (DOM). It's a programming concept that keeps a virtual representation of a user interface (UI) in memory and syncs it with the browser's DOM. A virtual DOM is a partial or full copy of the browser's DOM tree structure. It's created by frameworks like React and kept in memory for manipulations via app code.

  -- for more refer to this : https://legacy.reactjs.org/docs/faq-internals.html

● What is Reconciliation in React?

- React uses a virtual DOM (Document Object Model) to update the UI. The virtual DOM is a lightweight JavaScript representation of the real DOM. When the state of a component changes, React updates the virtual DOM. Then, React compares the virtual DOM to the real DOM and determines the most efficient way to update the real DOM. This process is called reconciliation.
  Reconciliation is an important part of React because it makes it very efficient to update the UI. Without reconciliation, React would have to update the entire DOM every time the state of a component changes. This would be very slow and inefficient.

Reconciliation in React refers to the process of updating the DOM (Document Object Model) to match the most recent virtual representation of a component's UI. In simpler terms, it's React's way of ensuring that the user interface reflects the current application state accurately.

● What is React Fiber?

- React Fiber is a complete rewrite of React's previous reconciler. It was introduced in React 16 and is aimed at improving the performance of React applications, especially in areas such as animation and layout.
  React Fiber uses a new data structure called the Fiber data structure to represent the React component tree. This data structure allows React to efficiently update and render components.
  React Fiber also uses a new algorithm called the concurrent mode algorithm. This algorithm allows React to split work into chunks and prioritize tasks based on importance. This makes React applications more responsive and smoother.
  React Fiber has been shown to significantly improve the performance of React applications. In some cases, React Fiber can make React applications up to 10 times faster.

● Why we need keys in React? When do we need keys in React?

- Keys are used in React to identify which items have changed, are added, or are removed. This is important because it helps React update the DOM efficiently.
  Keys are required when rendering a list of elements. They should be unique for each element in the list.
  Here are some examples of when you need to use keys in React:
  -- When rendering a list of items from an array.
  --When rendering a list of items from a database.
  --When rendering a list of items that are generated dynamically.
  If you do not use keys, React will not be able to identify which items have changed, and it will re-render the entire list every time there is a change. This can lead to performance problems.

● Can we use index as keys in React?

- Yes, we can use index as keys in react, but in generel it's not recommended. This is because using the index as a key can lead to issues if the order of items changes, negatively impacting performance and potentially causing issues with the component state.

● What is props in React? Ways to create and use props in react?

- Props in React are inputs that you pass into components. The props enable the component to access customized data, values, and pieces of information that the inputs hold. The term 'props' is an abbreviation for 'properties' which refers to the properties of an object. This is because all elements created in React are JavaScript objects. As a result, passing data into a component is done by creating properties and values for the object.

1. Pass in props as an argument in your function:

- When you create a component, you can pass in props as an argument in the function. For example, the following code creates a component called MyComponent that takes a prop called name:
  const MyComponent = (props) => {
  return <h1>Hello, {props.name}!</h1>;
  };

2. Declare props variables:
   You can also declare props variables in your component. For example, the following code declares a prop variable called name:

- const MyComponent = () => {
  const name = props.name;
  return <h1>Hello, {name}!</h1>;
  };

3. Use the variables in your JSX template:
   Once you have declared props variables, you can use them in your JSX template. For example, the following code uses the name prop variable to render a heading:

- const MyComponent = () => {
  const name = props.name;
  return <h1>Hello, {name}!</h1>;
  };

4. Pass data to the props:
   To pass data to the props, you can use the props object. For example, the following code passes the string "John Doe" to the name prop:

- <MyComponent name="John Doe" />

5. Use props in child components:
   You can also use props in child components. For example, the following code passes the name prop to the MyComponent child component:

- const ParentComponent = () => {
  const name = "John Doe";
  return (
  <div>
  <MyComponent name={name} />
  </div>
  );
  };

6. Use props to update state:
   You can also use props to update the state of a component. For example, the following code updates the name state variable when the name prop changes:

- const MyComponent = (props) => {
  const [name, setName] = useState(props.name);

  useEffect(() => {
  setName(props.name);
  }, [props.name]);

  return <h1>Hello, {name}!</h1>;
  };

● What is a Config Driven UI ?

- Config-driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them.

Configuration-driven UI (CDUI) is a user interface (UI) strategy that uses predefined configuration data to display information to users. It's also known as config-driven UI or configuration-based UI.

// Assignment 4
Build a Food Ordering App
○ Think of a cool name for your app
○ Build a AppLayout
○ Build a Header Component with Logo & Nav Items & Cart
○ Build a Body Component
○ Build RestaurantList Component
○ Build RestaurantCard Component
○ Use static data initially
○ Make your card dynamic(pass in props)
○ Props - passing arguments to a function - Use Destructuring & Spread
operator
○ Render your cards with dynamic data of restaurants
○ Use Array.map to render all the restaurants
