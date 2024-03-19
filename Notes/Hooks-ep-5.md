● What is the difference between Named Export, Default export and \* as export?

- Named exports
  Useful when you have multiple entities to export. Named exports allow you to export multiple values with specific names. When importing named exports, you must use the exact exported names.

- Default exports
  Useful for providing a single primary export. Default exports allow you to export a single value or function as the default export of a module. When importing default exports, you can give it any name you want during the import.

● What is the importance of config.js file

- The config.js file is a JavaScript configuration file that stores settings and parameters for a React application. It is typically located in the root directory of the project and is used to configure various aspects of the application, such as the environment, routing, and plugins.
  The config.js file is important because it allows developers to centralize and manage all of the application's configuration settings in one place. This makes it easier to keep track of changes to the configuration and to ensure that the application is always using the correct settings.

● What are React Hooks?

- React hooks are functions that enable developers to use state and other React features in functional components. They were introduced in React 16.8 as a way to write more concise and readable code, as well as to reuse stateful logic across multiple components without having to use class components.

Prior to hooks, stateful logic and lifecycle methods were primarily used in class components. With hooks, functional components can now have state, side effects, and other features previously only available in class components.

Some commonly used React hooks include:

1. `useState`: Allows functional components to have state.
2. `useEffect`: Allows performing side effects in functional components, similar to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in class components.
3. `useContext`: Allows functional components to consume context provided by `React.Context`.
4. `useReducer`: Provides an alternative to `useState` for managing more complex state logic.
5. `useRef`: Allows functional components to hold mutable values that persist across renders.
6. `useCallback` and `useMemo`: Memoizes functions and values to prevent unnecessary re-renders.
7. Custom hooks: Developers can create their own hooks to encapsulate and reuse stateful logic across components.

Using hooks can lead to cleaner and more modular code, as well as improved performance. However, it's essential to understand the rules of hooks, such as only calling hooks at the top level of a functional component and not calling them conditionally, to avoid unintended behavior.

● Why do we need a useState Hook?

- The useState hook in React is essential because it allows functional components to have state. Prior to the introduction of hooks, functional components were stateless and didn't have a way to manage their own state. This limitation made it challenging to handle user input, manage UI state changes, and perform other tasks that required state management.
