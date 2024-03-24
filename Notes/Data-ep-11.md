● What is prop drilling?

- Prop drilling is a fundamental concept in React that involves passing data down through nested components in an application. It occurs when a parent component generates its state and passes it down as props to its child components, but the children components do not consume the props.

● What is lifting the state up?

- "Lifting state up" is a term commonly used in React to describe the process of moving the state from a child component to its parent component. This pattern is used to share state and behavior between multiple components in a React application.

When you have multiple components that need access to the same state or need to update the same state, you can lift that state up to their closest common ancestor. By doing so, you create a single source of truth for the shared state, which simplifies the management of state and ensures that all components have consistent access to it.

Here's an example to illustrate lifting state up:

Let's say you have a parent component (`ParentComponent`) and two child components (`ChildComponent1` and `ChildComponent2`). Both child components need access to the same piece of state, such as a `count` variable.

Initially, you might define the `count` state in one of the child components (`ChildComponent1`), like this:

```jsx
import React, { useState } from "react";

const ChildComponent1 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

However, if you realize that `ChildComponent2` also needs access to `count`, you can lift the state up to the parent component (`ParentComponent`). You define the state and the `increment` function in the `ParentComponent` and pass them down as props to both `ChildComponent1` and `ChildComponent2`.

```jsx
import React, { useState } from "react";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent1 count={count} increment={increment} />
      <ChildComponent2 count={count} increment={increment} />
    </div>
  );
};

const ChildComponent1 = ({ count, increment }) => {
  return (
    <div>
      <h2>Count in ChildComponent1: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const ChildComponent2 = ({ count, increment }) => {
  return (
    <div>
      <h2>Count in ChildComponent2: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

Now, both `ChildComponent1` and `ChildComponent2` have access to the `count` state and can update it by calling the `increment` function passed down from the `ParentComponent`. This is the concept of lifting state up in action.

● What is Context Provider and Context Consumer?

- In React, a context provider is a component that creates and manages the context, which holds data that can be shared between components. A context consumer is a component that allows components to subscribe to a context and access the context and its data from within a component.

● If you don’t pass a value to the provider does it take the default value?

- In React, if you're using a context provider and you don't provide a value, it will not take the default value. Instead, it will use `undefined` as the value.

However, if you have specified a default value when creating the context using `React.createContext(defaultValue)`, then that default value will be used only when there's no matching provider in the component tree.

Here's an example to illustrate this behavior:

```jsx
import React, { createContext, useContext } from "react";

// Create a context with a default value
const MyContext = createContext("default value");

const ChildComponent = () => {
  // Access the context value
  const contextValue = useContext(MyContext);

  return <div>Context Value: {contextValue}</div>;
};

const App = () => {
  return (
    <div>
      {/* Provider with no value */}
      <MyContext.Provider>
        <ChildComponent />
      </MyContext.Provider>

      {/* Provider with a value */}
      <MyContext.Provider value="provided value">
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};

export default App;
```

In this example, the `ChildComponent` will render `"default value"` when it's wrapped in the first `MyContext.Provider` with no value passed to it. When it's wrapped in the second `MyContext.Provider` with a value of `"provided value"`, it will render that provided value.

If you want to ensure that a default value is always used even if no provider is available in the component tree, you should pass the default value explicitly when rendering the `Provider`. For example:

```jsx
<MyContext.Provider value="default value">
  <ChildComponent />
</MyContext.Provider>
```

This way, the default value will be used regardless of whether there's a matching provider higher up in the component tree.
