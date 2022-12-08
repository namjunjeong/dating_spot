
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Map from './category/map.mjs';
import CategoryPage from './category/Category.mjs';
import App from './App.mjs';
import Next from './category/Nextpage.mjs';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Map />
//     <CategoryPage /> 
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render( 
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>

    {/* <Map /> */}

    {/* <Router>
        <CategoryPage />
    </Router> */}
    {/* <BrowserRouter>
    <Next />
    </BrowserRouter> */}
  </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();