import React from "react";
import Start from "./start/Start";
import SelectCategory from "./selectcategory/src/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/selectcategory" element={<SelectCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
