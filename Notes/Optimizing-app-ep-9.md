● When and why do we need lazy()?

- Lazy loading, or lazy(), is a technique in React that allows developers to import components dynamically and render them as normal components. When a component is rendered, it automatically loads the bundle that contains the rendered component. Lazy loading can improve the performance of a website or application by reducing the initial page load time and improving the user experience.

● What is suspense?

- Suspense is a React feature that allows developers to display a temporary or "fallback" UI while waiting for data to load. It can be used to handle asynchronous rendering and code splitting, optimize web application performance, and enhance user experience.
  Suspense works by using two components:
  Suspense component: Wraps the component that is being loaded
  Fallback component: Displays content while the component is loading
  Suspense can be used in conjunction with React.lazy to handle the loading state of lazy-loaded components.

● Why we got this error : A component suspended while responding to
synchronous input. This will cause the UI to be replaced with a loading indicator.
To fix, updates that suspend should be wrapped with startTransition? How does
suspense fix this error?

- The error message you provided typically occurs in React when a component suspends while responding to synchronous input. When a component needs to fetch data asynchronously, React suspends rendering of that component until the data is fetched. However, if there's synchronous input (such as user interaction) that triggers a state update or a re-render before the data is fetched, React cannot immediately render the component. Instead, it needs to fallback to a loading state until the suspended component's data is available.

To fix this error, React suggests wrapping updates that might suspend with startTransition. startTransition is a function provided by React that allows you to indicate to React that the upcoming state updates are not crucial for immediate rendering and can be deferred until after the currently pending rendering work is complete. This helps to prevent UI flickering or replacement with loading indicators caused by suspending components during synchronous updates.

Suspense in React allows you to handle asynchronous operations declaratively, making it easier to manage loading states and data fetching in your components. It allows components to "suspend" their rendering while they're waiting for data to be fetched, rather than showing incomplete or empty UI. Suspense helps to coordinate the loading of data and UI rendering in a smooth and predictable way, improving the user experience by reducing unnecessary loading indicators or flickering.

● Advantages and disadvantages of using this code splitting pattern?

- Code splitting is a technique that can improve the performance and user experience of React applications by splitting code into smaller chunks that are loaded on-demand. Some benefits of code splitting include:
  Faster initial loading time
  Improved performance
  Reduced bandwidth consumption
  Enhanced caching efficiency
  Better user experience
  Lower bounce rates

● When do we and why do we need suspense?

- Suspense is a technique used in stories and plays to create tension and keep the audience's interest. It does this by creating anticipation as to what will happen next, and by keeping the reader engaged and interactive with the characters. Readers feel suspense when they are curious about what will happen next, or when they know what is likely to happen but don't know how it will happen. The uncertainty that you experience in a situation is what creates the element of suspense. As the suspense builds, the mind tries to find solutions before it is given to them.
