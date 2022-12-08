import React from "react";
import Location from './category/map2.mjs';
import Test from './category/Test.jsx';
import CategoryPage from "./category/Category.mjs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';


function App() {
    return (
        <RecoilRoot>
        <Routes>
            <Route path = "/" element = { <> <Location/>  <CategoryPage/>  </>} />

            <Route path = "/test" element = {<Test/>}/>
        </Routes>
        </RecoilRoot>
    );
  };
  
  export default App;