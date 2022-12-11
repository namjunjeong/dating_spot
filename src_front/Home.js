import React from 'react';
import { Route, Link , Routes} from 'react-router-dom';
import Final from './Final';
import Category from './allinone';
import './style.css';
import arr from './Firststep';
import Button from "./Button";
function Home() {
    const list = [];
    for (let key in arr){
        if (key != "x_coor" && key != "y_coor"){
            list.push(key);
        }
    }
    return (
        <div>
        <h1>카테고리를 선택해주세요</h1>
        <div className="flex-container">
        {list.map((a) => (
            <Button cate={a} key={a}/>
        ))}
        </div>
        <Routes>
            <Route path= "/alc" element={<Category keys="alc" />} />
            <Route path="/cafe" element={<Category keys="cafe" />} />
            <Route path="/culture" element={<Category keys="culture" />} />
            <Route path="/pcroom" element={<Category keys="pcroom" />} />
            <Route path="/place" element={<Category keys="place" />} />
            <Route path="/restaurant" element={<Category keys="restaurant"/>} />
            <Route path="/shopping" element={<Category keys="shopping"/>} />
            <Route path="/themepark" element={<Category keys="themepark"/>} />
            <Route path="/final" element={<Final/>} />
        </Routes>
        </div>
    )
}

export default Home;