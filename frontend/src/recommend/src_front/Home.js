import React from 'react';
import { Route, Routes ,useLocation,useNavigate,useEffect} from 'react-router-dom';
import Final from './Final';
import Category from './allinone';
import './style.css';
import Button from "./Button"

function Home() {
    const {arr} = useLocation();
    const navigate = useNavigate();
    /*const li = arr.state;*/
    const list = [];
    for (let key in li){
        if (key != "x" && key != "y"){
            list.push(key);
        }
    }
    return (
        <div>
        <center>
        <h1>카테고리를 선택해주세요</h1>
        <div className="flex-container">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        {list.map((a) => (
            <div key={a} style={{marginLeft:"2rem"  }}>
                <Button type={a}/>
            </div>
            
        ))}
        </div>
        <Routes>
        {list.map((a) => (
                <Route path= {`/${a}`} element={<Category keys= {a} arr={li}/>} />))}
            <Route path="/final" element={<Final arr={li}/>} />
            <Route path="/home" element={<Home />}/>
        </Routes>
        </center>
        </div>
    )
}

export default Home;

