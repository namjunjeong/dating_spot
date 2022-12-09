import React, {  useEffect, useState } from "react";
import { Route, Link, Routes, useLocation } from "react-router-dom";
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
import axios from "axios";

function Home() {
  const location = useLocation();
  let Loc=location.state;
  const [dat,setDat] = useState({
    cafe: [],
    restaurant: [],
    stroll: [],
    gallery: [],
    themeCafe: [],
    shopping: [],
    pcroom: [],
    drink: []
  });

  let categoryList=Loc.category;
  const x_coor= Loc.location[1];
  const y_coor= Loc.location[0];
  useEffect(()=>{
    console.log(x_coor,y_coor);
    async function search(){ 
      console.log("1");
      for (const cate of categoryList) {
        await axios({
          url : 'http://127.0.0.1:3000/data',
          method : "post",
          data : {
            "x": Loc.location[1],
            "y": Loc.location[0],
            "catagory" : cate
            }
        }).then((response) => {
          if (response.status===200){
            console.log("성공")
            setDat(dat[cate]=response.data.list)
          }else{
            console.log("에러에러");
          }
          })
          .catch((error) => {
            console.log("error occured");
            console.log(error);
          });
        };
      };
      search();
      console.log(dat);
    },[])

    


  return (
    <div>
      <div>
        <h1>카테고리를 선택해주세요</h1>
        <div className="flex-container">
          {("drink" in dat) ? 
          <Link to="/Alc" style={{ marginRight: "2rem" }} state={dat.drink}>
            <button>술집</button>
          </Link>
          :
          <div></div>
          }
          {("cafe" in dat) ? 
          <Link to="/Cafe" style={{ marginRight: "2rem" }}state={dat.cafe}>
            <button>카페</button>
          </Link>
          :
          <div></div>
          }
          {("gallery" in dat) ? 
          <Link to="/Culture" style={{ marginRight: "2rem" }} state={dat.gallery}>
            <button>문화시설</button>
          </Link>
          :
          <div></div>
          }
          {("pcroom" in dat) ? 
          <Link to="/Pcroom" style={{ marginRight: "2rem" }} state={dat.pcroom}>
            <button>PC방</button>
          </Link>
          :
          <div></div>
          }
          {("stroll" in dat) ? 
          <Link to="/Place" style={{ marginRight: "2rem" }} state={dat.stroll}>
            <button>관광명소</button>
          </Link>
          :
          <div></div>
          }
          {("restaurant" in dat) ? 
          <Link to="/Restaurant" style={{ marginRight: "2rem" }} state={dat.restaurant}>
            <button>음식점</button>
          </Link>
          :
          <div></div>
          }
          {("shopping" in dat) ? 
          <Link to="/Shopping" style={{ marginRight: "2rem" }} state={dat.shopping}>
            <button>쇼핑</button>
          </Link>
          :
          <div></div>
          }
          {("themeCafe" in dat) ? 
          <Link to="/Themepark" style={{ marginRight: "2rem" }} state={dat.themeCafe}>
            <button>테마카페</button>
          </Link>
          :
          <div></div>
          }
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
    </div>
  );
}

export default Home;
