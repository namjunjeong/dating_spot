import React from 'react';
import ReactDOM from 'react-dom/client';
import CategoryPage from './category/Category.mjs';
import App from './App.mjs';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render( 
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
  );



