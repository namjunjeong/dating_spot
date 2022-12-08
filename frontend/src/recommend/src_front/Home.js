import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Alc from "./Category/Alc";
import Cafe from "./Category/Cafe";
import Culture from "./Category/Culture";
import Pcroom from "./Category/Pcroom";
import Place from "./Category/Place";
import Restaurant from "./Category/Restaurant";
import Shopping from "./Category/Shopping";
import Themepark from "./Category/Themepark";
import Final from "./Final";
import "./style.css";
function Home() {
  return (
    <div>
      <h1>카테고리를 선택해주세요</h1>
      <div className="flex-container">
        <Link to="/Alc" style={{ marginRight: "2rem" }}>
          <button>술집</button>
        </Link>
        <Link to="/Cafe" style={{ marginRight: "2rem" }}>
          <button>카페</button>
        </Link>
        <Link to="/Culture" style={{ marginRight: "2rem" }}>
          <button>문화시설</button>
        </Link>
        <Link to="/Pcroom" style={{ marginRight: "2rem" }}>
          <button>PC방</button>
        </Link>
        <Link to="/Place" style={{ marginRight: "2rem" }}>
          <button>관광명소</button>
        </Link>
        <Link to="/Restaurant" style={{ marginRight: "2rem" }}>
          <button>음식점</button>
        </Link>
        <Link to="/Shopping" style={{ marginRight: "2rem" }}>
          <button>쇼핑</button>
        </Link>
        <Link to="/Themepark" style={{ marginRight: "2rem" }}>
          <button>테마파크</button>
        </Link>
      </div>
      <Routes>
        <Route path="/Alc" element={<Alc />} />
        <Route path="/Cafe" element={<Cafe />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/Pcroom" element={<Pcroom />} />
        <Route path="/Place" element={<Place />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Themepark" element={<Themepark />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </div>
  );
}

export default Home;
