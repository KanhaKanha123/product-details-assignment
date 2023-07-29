# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all the dependancies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Tests are not implemented for this project.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Key points about project code
1. Used react-query to manage caching. Application is not making unnessary api requests.It will give a huge performance boost.
2. Created shared resuable componants this makes app loosely coupled. We can make development speed faster.
3. Use of recoil help to manage app state all over the app for different pages.
4. Routing is used.
5. App is loosely coupled and there is always scope to add things in future without changing existing code.
6. Styled components are in use they are more redable and maintainable.
7. area-labels and symentics tags added for accessibility.
8. Index.ts files added for each folder to make import shorter.
9. App is responsive.

## Folder strucutre
1. api--> it has the baseUrl of api so we don't have to write in other places when we make request.
2. Components-->It has all the components related to the app. It contains few sub components(product,header,shared-components) inside it, according to the feature.
3. products--> It contains all the component related to product like list of products, details of product.
4. Header--> It has app header with search functionality.
5. Shared-components--> It has the styled-components and other components which are shareable all over the app.
6. Custom-hooks--> All the api calls are made here. This way we can make sure there is one place to make api calls and that is custom hooks. We can share this in any component also.
7. Error-Boundary--> It help us not to crash all app, just show a proper message.
8. helpers--> This folder will contains the helper mthods for the app.
9. pages--> This folder will contains higher level components pages of the app which are in the router and responsible to render main design in the app.
10. react-query--> This folder will have all the configs related to react-query.
11. router--> This folder containes all the routes.
12. store--> This folder contains the recoil state so we can manage state in all over the app.