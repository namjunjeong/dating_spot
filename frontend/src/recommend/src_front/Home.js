
import React from 'react';
import { Route, Routes ,useLocation,useNavigate,useEffect,Link} from 'react-router-dom';
import Final from './Final';
import Category from './allinone';
import './style.css';
import Button from "./Button"

function Home() {
    const arr = useLocation();
    const navigate = useNavigate();
    const li = arr.state;
    const list = [];
    for (let key in li){
        if (key != "x" && key != "y"){
            list.push(key);
        }
    }
    return (
        <div>
        <center>
        <h1>아래 리스트에서 카테고리를 선택해주세요</h1>
        <div className="flex-container">
        {list.map((a) => (
            <Link to={`/home/${a}`} state={li}><button className='btn1'>{a}</button></Link>
            
        ))}
        </div>
        <Routes>
            <Route path="cafe" element={<Category keys="cafe"/>}></Route>
            <Route path="restaurant" element={<Category keys="restaurant"/>}></Route>
            <Route path="stroll" element={<Category keys="stroll"/>}></Route>
            <Route path="gallery" element={<Category keys="gallery"/>}></Route>
            <Route path="themeCafe" element={<Category keys="themeCafe"/>}></Route>
            <Route path="shopping" element={<Category keys="shopping"/>}></Route>
            <Route path="pcroom" element={<Category keys="pcroom"/>}></Route>
            <Route path="drink" element={<Category keys="drink"/>}></Route>
            <Route path="final" element={<Final arr={li}/>} />
        </Routes>
        </center>
        </div>
    )
}

export default Home;