import {useLocation ,useNavigate,Route,Routes, Link} from "react-router-dom";
import {useState,useEffect} from "react";
import Home from "./Home";
import axios from 'axios';
import ReactLoading from 'react-loading';


function Loading({type, color, message}) {
  return (
    <div class="contentWrap">
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}>
        <h2>{message}</h2>
        <h2>창을 닫지 말아주세요.</h2>
        <ReactLoading
          type={type}
          color={color}
          height={'80%'}
          width={'80%'} />
        <h2>카테고리가 많을시 로딩시간이 길 수 있습니다</h2>
      </div>
    </div>
  );
}
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
  const List = {"x":location.state.location[1], "y":location.state.location[0], "category": location.state.category};
  let navigate = useNavigate();
  const len=List.category.length;
  const [test,setTest]=useState(0);
  const [datalist,setDatalist]=useState();
  useEffect(()=>{//무한 렌더링을 해결하기 위해 useState, useEffect 사용
    data({List,setTest,setDatalist});
  },[]);

  useEffect(()=>{
    setDatalist(Lis)
  },[test])

  return (
    <div>
      {test==1 ? 
      <div>
        <h2> 데이터 로딩 완료! </h2>
        <Link to="/home" state={Lis}>
          <button style={{"font-size":"50px"}}>카테고리 선택하기</button>  
        </Link>
      </div> : 
      <div>
        <div>  </div>
        <div><Loading type="spin" color="#e9b1c6" message="데이터를 로딩중입니다!"/></div>
      </div>
      }
    </div>
  )
}

export default Data; //home.js에서 데이터 넘기기 클릭시 state로 데이터 넘어감

//useEffect내에서 axios로 비동기로 주소에 post한다.
//주소에 List안에 category의 수만큼 for문을 돌린다.
//for문 안에서 해당 정보들을 post하고 각각의 response를 []에 저장한다.