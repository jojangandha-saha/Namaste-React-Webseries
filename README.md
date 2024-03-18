# Parcel

- Dev build
- Local server
- auto refresh ~ HMR (hot module refreshment)
- File watching algorithm
- Caching - Faster build ~ inside .parcel-cache
- Image optimization
- Minification of files
- Bundling
- Compressing
- Consistent Hashing
- Code splitting
- Differential bundling for production on different platforms - browsers, phone etc
- Error handling
- Deploying in HTTPs(Http with security)
- Tree shaking algorithm( tree shake unused, unnecssary code)
- lazy mode

# Food ordering app structure

/\*\*

- FOOD ORDERING APP - MEALMATE(Meal kit speacialits)
- Components of the app
- - Header
-      - Logo
-      - Nav items - Home, about, cart etc
-
- - Footer
-      - copyright
-      - address, contacts
-      - links
- - Body
-      - search
-      - Card container(resturants)
-      - cards
-          - img
-          - name
-          - star rating, cuisine, distance
  \*/

---

# React Hooks - (normal js utility funciton)

- pre built inside React
- import these functions

2 important hooks - (most times)

- useState()
- useEffect()

2 types of Routing in web app

- Client side - not making any network call, everything is inside the app itself. it just load the component
- Server side ~ make netwrok call, page coming from server itself

Single responsiblity principle?

- any single class/functions should have a single responsiblity. maintaining code into modularity -> to keep code more maintainable & testable -> breaking down code into smaller chunks/modules -> better for unit testing. easy to see for bugs. reusability,maintainalbe, testable.
- keep components as light as possible, code should be readable.

ex. restaruant menu component should be displaying menu/ restaurant card component should be displaying card only. shouldn't do multiple tasks inside same component.

# FEATURES

- work on displaying restaurant menu as we click on restaurant card, using a custom hooks

- always use "use" while using custom hooks. it provides the concept that react code is being used.

- large scale application must have optimization.
- for large scale app , parcel/webpack - builds a producation ready code - bundle one js file and provided to browser
- if not optimized bundled js file size will be increased.
- frontend app - code must be optimized. break your app down into smaller pices

- build smaller bundles for apps - Code chunking/ Code splitting/ lazy loading / Dynamic bundling

- postcss ~ tool to transform css with js. tailwind uses it bts.
