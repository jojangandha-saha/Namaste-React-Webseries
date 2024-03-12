● What is JSX?

- JSX stands for JavaScript syntax extension. It's a JavaScript extension that allows developers to write HTML-like code inside a JavaScript file. JSX produces React element, which can be rendered. behind the scenes jsx code is converted to React.createElement which is further converted into React object which when rendered onto the browser converted into html object, which bowser can easily interpret.

React.createElement vs JSX

- React.createElement and JSX are two different ways to create React elements.
  React.createElement is a JavaScript function that takes three arguments:
  The type of element to create. This can be a built-in HTML element, a custom component, or a fragment.
  An object of props to pass to the element.
  An optional array of child elements.
  JSX is a syntax extension to JavaScript that allows you to write HTML-like code inside your JavaScript files. JSX elements are converted to React.createElement calls by the Babel compiler.

- How to create element with a React.createElement:
  const element = React.createElement('div', { className: 'my-class' }, 'Hello, world!');

three attributes - first one is the(html) element , second attributes for the elment , third is the object or what to return

- Here is an example of how to create a React element using JSX:

const element = <div className="my-class">Hello, world!</div>;

● Benefits of JSX

- JSX stands for JavaScript XML. It is a JavaScript extension that allows you to write HTML in your JavaScript code. JSX is not required to use React, but it is widely used because it makes writing React code easier and more readable.

● Behind the Scenes of JSX
Refer to this link and image for better understanding.

- https://www.geeksforgeeks.org/how-jsx-works-behind-the-scene/
  ![alt text](image.png)
- JSX ultimetly returns an object, which gets converted or transpailed to React.createElement behind the scenes which is actually done by Babel. which finally gets transformed to basic html element.

● Babel & parcel role in JSX

- Babel and Parcel are both popular tools used in JavaScript development. Babel is a JavaScript transpiler that converts ECMAScript 2015+ code into a backward-compatible version of JavaScript. Parcel is a web application bundler that offers fast performance and requires zero configuration.
  JSX is a JavaScript syntax extension that allows you to write HTML-like code in your JavaScript files. This can make it easier to create complex user interfaces and can also help to keep your code more organized.
  Babel and Parcel both play a role in enabling JSX in your JavaScript projects. Babel can be used to transpile your JSX code into regular JavaScript, while Parcel can be used to bundle your JavaScript files together with your HTML and CSS files.

● Components

- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

there are two types of components - class based and functional . In recent versions of react, functional components are being used for better readablity and easier use.

● Functional Components

- The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

Role of type attribute in script tag? What options can I use there?

- The type attribute in an HTML script tag specifies the media type of a script. It also identifies the content between the <script> and </script> tags.

The type attribute has a single value, media_type, which specifies the script's MIME type. The media type consists of two parts: one media type and one subtype. For example, the media type for JavaScript is "text/javascript".

{TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX:

They are all referencing to the same thing. they all are ways to call the component - here it is TitleComponent. Any tag format can be used to call component inside another component or element or inside JSX.
