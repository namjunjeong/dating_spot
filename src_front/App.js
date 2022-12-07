import React from "react";
import Map from './category/map';
import Next from './category/Nextpage';
import Test from './category/Test';
import CategoryPage from "./category/Category";
// import {Map} from "./category/mapCategory";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <Routes>
            {/* <Route index element={<div>main</div>} /> */}
            {/* <Route path = "/" element = { <Map/> } /> */}
            <Route path = "/" element = { <> <Map/>  <CategoryPage/> <Next /> </>} />

            <Route path = "/test" element = {<Test/>}/>
        </Routes>
    );
  };
  
  export default App;