

import React from "react";
import Map from './category/map.mjs';
import Location from './category/map2.mjs';
import Next from './category/Nextpage.mjs';
import Test from './category/Test.jsx';
import CategoryPage from "./category/Category.mjs";
// import {Map} from "./category/mapCategory";
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
            {/* <Route index element={<div>main</div>} /> */}
            {/* <Route path = "/" element = { <Map/> } /> */}
            <Route path = "/" element = { <> <Location/>  <CategoryPage/> <Next /> </>} />

            <Route path = "/test" element = {<Test/>}/>
        </Routes>
        </RecoilRoot>
    );
  };
  
  export default App;