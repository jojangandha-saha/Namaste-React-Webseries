● What is `NPM`?

- NPM is for Node Package Manager. It's a free library and registry for JavaScript software packages. It also has command-line tools to help you install packages and manage their dependencies.NPM is the default package manager for JavaScript's runtime Node.js. It manages packages for web applications.

● What is `Parcel/Webpack`? Why do we need it?

- Parcel and Webpack are both bundlers used in modern web development. They are used to minify, clean, and compact JavaScript or Typescript code. This makes it easier to send a request or receive a response from the server.

● What is `.parcel-cache`

- .parcel-cache is a directory created by the Parcel bundler in a project's root directory. It stores information about a project's assets, dependencies, and transformations. It also stores intermediate build results, dependencies, and compiled assets to improve build performance.

Parcel builds code in parallel using worker threads, utilizing all of the cores on a machine. Everything is cached, so the same code is never built twice. Using this technqiues each time build time gets shorter.

● What is `npx` ?

- NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.

● What is difference between `dependencies` vs `devDependencies`?

- In a package.json file, dependencies are packages required by an application in production, while devDependencies are packages only needed for local development and testing.

Dev dependencies are typically installed during the development phase and are not necessary when running the project in a production environment. These packages assist developers in writing high-quality code, automating tasks, and ensuring the project's maintainability and reliability.

● What is Tree Shaking?

- In Parcel, tree shaking is a performance optimization that removes unused exports and renames variables to avoid conflicts with other modules. It's also known as "dead code elimination". Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used.

● What is Hot Module Replacement?

- Hot Module Replacement (HMR) is a feature that allows developers to update modules in a running application without requiring a full page reload. This can save time and improve the development process. Parcel uses this feature to automatically preserve your application state between updates. This gives you instant feedback as you make changes, without taking you out of context.

● List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

~Parcel features that I like :

- Creates a development server.
- Display of beautiful diagnostics in terminal as well as browser.
- Hot reloading.
- Differential building.

* Description:

- Creates a development server - Parcel includes a development server, just by running this command - npx parcel index.html. It automatically creates a server at a local host. Meaning we can easily host our web app without having to build a server from scratch. It can also create production server , with this command - npx parcel build index.html. By default, it starts a server at http://localhost:1234.

- Display of beautiful diagnostics in terminal as well as browser - If we make any kind of error in our code or configaration. Parcel displays beautiful diagnostics in your terminal and in the browser.Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.

- Hot reloading - If we make change in our codebase, parcel automatically updates our code in browser, we don't need to reload or refresh the page to see the updated version.

● What is .gitignore? What should we add and not add into it?

- A .gitignore file is a text file that tells Git which files and folders to ignore in a project. It's placed in the git repository and tells Git not to track certain files and folders. we can use .gitignore to specify files or directories that we don't want to track. For example, to exclude a virtual environment directory named venv, we can add "venv/" to the .gitignore file.

Upuntil now, in this course - we have put 3 things inside .gitignore, they are - node_modules,dist,parcel-cache.

These mpdules, folders can actually be regenerated through package.json itself, folders which we can regenerate and heavy in size, we don't need to push them onto git nor in production, so we can safely keep them in .gitignore files, for future use purposes.

● Difference between package.json & package-lock.json?

- package.json focuses on project metadata, while package-lock.json ensures deterministic installations. package.json shows a property and its version, while package-lock.json shows the property's dependencies and sub-dependencies. package-lock.json is created to lock the dependency with the installed version. It installs the latest version of the package and saves it in package.json. The package-lock.json file can be generated using the npm install --package-lock-only command.
  to simply put, package.json keeps track of what kind of packages are required and used in project. and package-lock.json keeps exact versions of the packages used.

● Why should I not modify package-lock.json?

- The package-lock.json file is automatically generated and is not intended to be manually edited. It tracks the entire dependency tree, including dependencies of dependencies, and the exact version of each dependency.

● Here are some reasons why you should not modify package-lock.json:

- It should be in source control with the package.json file.
  It ensures no dependency breaks your app.
  It ensures that all contributors install exactly the same dependencies.

● What is node_modules ? Is it a good idea to push that on git?

- The node_modules folder is a folder that is created when we install packages using the Node Package Manager (npm). It stores the packages and their dependencies that our project requires.

It is generally not a good idea to push the node_modules folder to Git. This is because the node_modules folder can be very large, and tracking changes to the packages and dependencies in your Git repository is usually unnecessary. Additionally, pushing the node_modules folder to Git can lead to merge conflicts and other problems.

● What is the dist folder?

- The dist folder is short for "distribution". It's a folder that contains the production-ready code for an application. The dist folder is often used when preparing an application for deployment to a hosting environment.

distribution folder, is dynamically generated when using the nuxt generate commands and includes the generated production ready HTML files and assets that are necessary to deploy and run the application.

● What is browserlists

- Browserslist is a tool that specifies which browsers a web application can run in. It's a configuration file that determines which browsers a project should support.

● Difference between ^ - caret and ~ - tilda in package.json file?

- The caret (^) and tilde (~) are symbols used in the package.json file to specify version ranges for package dependencies. These symbols are prefixes that developers or npm add to indicate restrictions on which software version numbers can be used as a dependency in a project.
