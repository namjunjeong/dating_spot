import React, { useEffect, useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import Alc from "./Category/Alc";
import Cafe from "./Category/Cafe";
import Culture from "./Category/Culture";
import LoadingWithMask from "./Category/Loading";
import Pcroom from "./Category/Pcroom";
import Place from "./Category/Place";
import Restaurant from "./Category/Restaurant";
import Shopping from "./Category/Shopping";
import Themepark from "./Category/Themepark";
import Final from "./Final";
import "./style.css";
import axios from "axios";

function Home() {
  const location = useLocation();
  let Loc=location.state;
  const [dat,setDat] = useState();
  const [maxcat,setMaxcat] = useState();
  const [curcat,setCurcat] = useState(0);

  useEffect(()=>{
    console.log(Loc.location[0],Loc.location[1])
    console.log(Loc.category);
    let categoryList=Loc.category;
    setMaxcat(categoryList.length);
    const data = async () => {
      for (let i = 0; i < categoryList.length; i++) {
        let cate=categoryList[i]
        await axios({
          url : "http://127.0.0.1:3000/data", 
          method : "post",
          data : {
            "x": Loc.location[1],
            "y": Loc.location[0],
            "category": cate
          }
        }).then((response) => {
            setCurcat(curcat+1);
            setDat({
              ...dat,
              cate : response.data.list
            })
          })
          .catch((error) => {
            console.log(error);
          });
        if (curcat<maxcat) {
          LoadingWithMask();
        }
      }
    };
  
    data();

  },[]);
  return (
    <div>
      {(curcat < maxcat) ? 
        (<div>{LoadingWithMask()}</div>)
        :
        <div>
          <h1>카테고리를 선택해주세요</h1>
          <div className="flex-container">
            <Link to="/Alc" style={{ marginRight: "2rem" }} state={dat}>
              <button>술집</button>
            </Link>
            <Link to="/Cafe" style={{ marginRight: "2rem" }}state={dat}>
              <button>카페</button>
            </Link>
            <Link to="/Culture" style={{ marginRight: "2rem" }} state={dat}>
              <button>문화시설</button>
            </Link>
            <Link to="/Pcroom" style={{ marginRight: "2rem" }} state={dat}>
              <button>PC방</button>
            </Link>
            <Link to="/Place" style={{ marginRight: "2rem" }} state={dat}>
              <button>관광명소</button>
            </Link>
            <Link to="/Restaurant" style={{ marginRight: "2rem" }} state={dat}>
              <button>음식점</button>
            </Link>
            <Link to="/Shopping" style={{ marginRight: "2rem" }} state={dat}>
              <button>쇼핑</button>
            </Link>
            <Link to="/Themepark" style={{ marginRight: "2rem" }} state={dat}>
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
      }
    </div>
  );
}

export default Home;
