# Namaste React 🚀

## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

Header
Logo
Nav Items
Body
Search
RestaurantContainer
RestaurantCard

- Img
- Name of Res, Star Rating, cuisine, delery tie
  Footer
  Copyright
  Links
  Address
  Contact \*/
  Two types of Export/Import

Default Export/Import
export default Component; import Component from "path";

Named Export/Import
export const Component; import {Component} from "path";

Higher oder components

- function; takes a component as input and returns a component.

- adds extra feature/ enhancing existing componenet and returns it back.

- state & props are importatnt part of components

# Props drilling

- passing data/props down from parent to grandchilderen through children
- for big application -> deep nesting followed, props drilling is a problem. keep on passing props without using it in certain componenet still needs to be passed down.

- needs some global data that can be accessed from anywhere -> React context. Context API. to avoid prop drilling.

# Redux

two libraris of react

- react-redux
- redux toolkit(RTK)

- redux works on data layer
- redux is separate library than react
- easy debugging in redux
- state management -> state container

# Redux Toolkit

- Install libraries -> Redux toolkit(@reduxjs/toolkit), react-redux
- Build redux store - inside utils
- connect redux store to app(componenet)
- create a slice(cart function to add cart)
- dispatch an action
- Read data using selector
- Build cart functionality
- we can also have separate folder structure for redux also

# Types of testing for developers

(major first two tests)

- Unit testing (test react components in isolation)
- Integration testing (testing using code)
- End to end testing( testing starting from user landing on to page till user gets out of app, checking user flow of application)
