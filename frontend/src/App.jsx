import React from "react";
import Start from "./start/Start.jsx";
import SelectCategory from "./selectcategory/SelectCategory";
import Result from "./Result/Result.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Recommend from "./recommend/src_front/app_modify";
import Home from "./recommend/src_front/Home.js";
import Final from "./recommend/src_front/Final";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/selectcategory" element={<SelectCategory />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/final" element={<Final />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
