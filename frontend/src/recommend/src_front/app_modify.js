import {useLocation ,useNavigate,Route,Routes, Link} from "react-router-dom";
import {useState,useEffect} from "react";
import Home from "./Home"
import axios from 'axios'


/*const lis = {
  "x":123.12312321, 
  "y":123521412,
  "cafe": [{name: 123,add:123},{name:111,add:111}]
} //받을 데이터*/



var Lis={}

function Data(){
  const data = async({List,setTest,setDatalist})=>{
    Lis={"x": List.x, "y": List.y}
    let temp=0;
    for(let i=0; i<List.category.length;i++){
      await axios.post("http://127.0.0.1:3000/data",{
        x : List.x,
        y : List.y,
        category : List.category[i]
        
        }).then((response)=>{
          var cat=List.category[i];
          Lis[cat] = response.data.list;
          temp+=1
          if(temp==len){
            setTest(1);
          }
      });
    }
  };
  const location = useLocation();//uselocation으로 List안에받아옴
  console.log(location.state)
  const List = {"x":location.state.location[1], "y":location.state.location[0], "category": location.state.category};
  console.log(List)
  let navigate = useNavigate();
  const len=List.category.length;
  const [test,setTest]=useState(0);
  const [datalist,setDatalist]=useState();
  useEffect(()=>{//무한 렌더링을 해결하기 위해 useState, useEffect 사용
    data({List,setTest,setDatalist});
  },[]);

  useEffect(()=>{
    setDatalist(Lis)
    console.log("yes")
  },[test])

  return (
    <div>
      {test==1 ? <div>good</div> : <div> loading </div>}
      <Link to="/home" state={Lis}>데이터 넘기기</Link>
      <Routes>
        <Route path="/home/*" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default Data; //home.js에서 데이터 넘기기 클릭시 state로 데이터 넘어감

//useEffect내에서 axios로 비동기로 주소에 post한다.
//주소에 List안에 category의 수만큼 for문을 돌린다.
//for문 안에서 해당 정보들을 post하고 각각의 response를 []에 저장한다.