## react-starter-kit - react boilerplate

### Installed Packages

- react 16.8.6
- redux 4.0.1
- react-redux 7.0.3
- redux-saga 1.0.2
- immer 3.1.2
- history 4.9.0
- react-router-dom 5.0
- connected-react-router 6.4.0
- webpack 4.3.0
- styled-components 4.1.3
- material-ui 4.0.2
- core-js, regenerator-runtime, whatwg-fetch

### Quick Start

#### 1. Installation

```
git clone https://github.com/Nickew/react-starter-kit.git
```

#### 2. Run `npm install`

This will install all project dependencies from [package.json](./package.json)
file.

#### 3. Run `npm start`

Will start `webpack-dev-server` with hot-reloading on
[localhost:3000](http://localhost:3000).

#### 4. Run `npm run build`

This command will build you project into `build` folder.

### Directory Structure

```
.
| -- build                   # Folder with compiled code
| -- node_modules            # Installed packages
| -- src                     # Source code of project
|    | -- assets             # Folder with images/fonts etc.
|    | -- components         # React presentational/Dumb components
|    | -- containers         # React smart/containers
|    | -- pages              # React routes
|    | -- modules            # Redux files (reducers, actions, sagas)
|    | -- utils              # Helper functions
|    | -- index.html         # Root index.html
|    | -- index.jsx          # Entry point for scripts
|    | -- configureStore.js  # Redux store configuration file
|    | -- globalStyles.scss  # Global styles
| -- webpack                 # Webpack configurations
```
