import React from "react";
import Start from "./Start/Start.jsx";
import SelectCategory from "./SelectCategory/SelectCategory.jsx";
import Result from "./Result/Result.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/selectcategory" element={<SelectCategory />} />
          <Route path="/recommend" element={<SelectCategory />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
