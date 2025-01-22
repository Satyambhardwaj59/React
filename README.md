# Namaste React 🚀


# Parcel
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
- Differential Bundling - support olderbrowsers
- Diagnostic 
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# my Own Food App

 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search 
 * - Restaurant cantainer
 *      - RestaurentCart
 *          - Img
 *          - Name of Res, Star Rating, cuisine, delavery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact

# Types of Export/Import

1 Default export/import (only one file can be exported..)

- export default Component;
- import Component from "path";

2 Named export/import (many file can be exported...)

- export const Variable/Component; 
- import {Variable/Component} from "path";

# Conditional rendering :
- rendering accoring to the condition is known as conditional rendering

- Whenever state variable update, react triggers a reconciliation cycle (re-renders the component)

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector

...
# Types of testing (Devloper)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

...
# Setting up Testing in our app
- Install React Testing Library (npm i -D @testing-library/react)
- Install jest (npm i -D jest)
- Installed Babel dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure Babel (babel.config.js file)
- Configure Parcel Config file to disable default babel transpilation (.parcelre file)
- Configure Jest (npx jest --init) (jest.config.js file)
- Install jsdom library (npm i -D jest-environment-jsdom)