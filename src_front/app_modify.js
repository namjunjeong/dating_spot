import {useLocation ,useNavigate,Route,Routes} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from 'axios'
import Home from './Home';


/*const lis = {
  "x":123.12312321, 
  "y":123521412,
  "cafe": [{name: 123,add:123},{name:111,add:111}]
} //받을 데이터*/


const data = async({List,Lis,setLis})=>{
  for(let i=0; i<List.category.length;i++){
    await axios.post("http://127.0.0.1:3000/data",{
      x : List.x,
      y : List.y,
      category : List.category[i]
      
      }).then((response)=>{
        for (let key in response) {
          console.log(key);
          if (key != "x" && key != "y"){ //x좌표와 y좌표는 이미 처음 state에 담았기 때문에 제외//
            setLis({...Lis, key: response[key]}); // ex) {...., cafe: [{..},{..}]} 요렇게 되는 거 확인//
          }
        }
        
    });
  }
};


function Data(){
  const {list} = useLocation();//uselocation으로 List안에받아옴
  const List = {"x":123.12312321, "y":123521412, "category": ["cafe","place"]};
  let navigate = useNavigate();
  const [Lis,setLis]=useState({"x": List.x, "y": List.y});//무한 렌더링을 해결하기 위해 useState, useEffect 사용
  useEffect(()=>{
    data({List,Lis,setLis});
  },[]);
  return (
    <div>
      <h1>여기를 렌더링 해서 클릭하면 home으로 넘어가면서 데이터 넘기는 건 어떠할까용?</h1>
      <button onClick={navigate("/home",{state: Lis})}>데이터 넘기기 </button>
      <Routes>
      <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default Data; //home.js에서 데이터 넘기기 클릭시 state로 데이터 넘어감

//useEffect내에서 axios로 비동기로 주소에 post한다.
//주소에 List안에 category의 수만큼 for문을 돌린다.
//for문 안에서 해당 정보들을 post하고 각각의 response를 []에 저장한다.