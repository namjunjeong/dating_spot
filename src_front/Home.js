import React from 'react';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Final from './Final';
import Category from './allinone';
import './style.css';
import arr from './Firststep';
import Button from "./Button";
import Data from "./app_modify";
function Home() {
    const {state} = useLocation();
    const list = [];
    for (let key in state){
        if (key != "x_coor" && key != "y_coor"){
            list.push(key);
        }
    }
    return (
        <div>
        {/* <Data /> 
           만약 Data 렌더링 했으면, ***arr from ./Firststep 대신에*** 
                                   *** useLocation()으로 state에 *** 받아준 후 쓰면 됨*/}
        <Data />
        <h1>카테고리를 선택해주세요</h1>
        <div className="flex-container">
        {list.map((a) => (
            <Button cate={a} key={a}/>
        ))}
        </div>
        <Routes>
            <Route path= "/alc" element={<Category keys="alc" arr={state} />} />
            <Route path="/cafe" element={<Category keys="cafe" arr={state}/>} />
            <Route path="/culture" element={<Category keys="culture" arr={state}/>} />
            <Route path="/pcroom" element={<Category keys="pcroom" arr={state}/>} />
            <Route path="/place" element={<Category keys="place" arr={state}/>} />
            <Route path="/restaurant" element={<Category keys="restaurant"arr={state}/>} />
            <Route path="/shopping" element={<Category keys="shopping" arr={state}/>} />
            <Route path="/themepark" element={<Category keys="themepark" arr={state}/>} />
            <Route path="/final" element={<Final arr={state}/>} />
        </Routes>
        </div>
    )
}

export default Home;