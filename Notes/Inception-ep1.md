● What is Emmet?

- Emmet is a set of plug-ins for text editors that helps users code and edit in structured code formats.

● Difference between a Library and Framework?

- libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application
  A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.

● What is CDN? Why do we use it?

- A content delivery network (CDN) is a group of servers that work together to speed up the delivery of content on the web. CDNs are used to improve site rendering speed by reducing the distance between a website's server and its visitors.

A CDN improves efficiency by introducing intermediary servers between the client and the website server. These CDN servers manage some of the client-server communications. They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

● Why is React known as React?

- React is known as React because of its core feature, which is its ability to "react" or respond dynamically to changes in data. React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.
  React is a JavaScript library for building user interfaces. It is declarative, efficient, and flexible. React makes it easy to create interactive UIs by using a component-based approach. Components are reusable pieces of code that can be composed together to create complex UIs.
  React uses a virtual DOM to efficiently update parts of a webpage. The virtual DOM is a lightweight representation of the real DOM. When data changes, React updates the virtual DOM, and then efficiently updates the real DOM to match the virtual DOM. This makes React applications very fast and responsive.

● What is crossorigin in script tag?

- The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

● What is diference between React and ReactDOM?

- React and ReactDOM are two JavaScript libraries for building user interfaces. React is the core library for creating components, and ReactDOM is responsible for rendering those components in a browser environment.
  React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".
  ReactDOM is the glue between React and the DOM. It takes React elements and updates the DOM accordingly. ReactDOM can also be used to render React components to other environments, such as servers or native mobile apps.

● What is difference between react.development.js and react.production.js files via CDN?

- The main difference between the react.development.js and react.production.js files is that the production file is minified and optimized for performance, while the development file includes extra code for debugging and development tools.

react.development.js

- Includes development-specific code and warnings
- Larger file size
- Slower performance
- Easier to debug

react.production.js

- Minified and optimized for performance
- Smaller file size
- Faster performance
- Harder to debug

● What is async and defer in HTML tag?

- Async
  The browser downloads the file while parsing HTML and pauses the HTML parser to execute the script when it's finished. This means the script is executed as soon as it's downloaded, without blocking the browser.

- Defer
  The browser downloads the file while parsing HTML and only executes it after the parser has finished. Defer scripts are guaranteed to execute in the order that they appear in the document. This also does not block the browser.
