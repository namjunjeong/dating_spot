import React from 'react';
import ReactDOM from 'react-dom/client';
import Category from 'Category';
import Process from 'Process';
import Result from 'Result';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Category/>}/>
      <Route path="/process" element={<Process/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
