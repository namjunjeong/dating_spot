import React from 'react';
import ReactDOM from 'react-dom/client';
import Data from './app_modify'; 
import { BrowserRouter } from 'react-router-dom';

// <Home /> 대신에 <Data />를 첫 페이지로 잡아놓으면 Data에서 클릭시 넘어 home으로 넘어가게 함

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Data />
  </BrowserRouter>
);

