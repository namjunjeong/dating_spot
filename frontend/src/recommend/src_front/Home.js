<<<<<<< HEAD
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

=======
import React from 'react';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Final from './Final';
import Category from './allinone';
import './style.css';
import arr from './Firststep';
import Button from "./Button";
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
        <h1>카테고리를 선택해주세요</h1>
        <div className="flex-container">
        {list.slice(2).map((a) => (
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

>>>>>>> 81aa9e31672920dbfbbb626d1620d9befcd724ff
