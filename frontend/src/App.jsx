import React from "react";
import Start from "./start/Start";
import SelectCategory from "./selectcategory/SelectCategory.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/selectcategory" element={<SelectCategory />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
