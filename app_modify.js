import {uselocation} from "react-router-dom";
import {useState,useEffect} from "react";
import axios from 'axios'



/*const list = {"x":123.12312321, "y":123521412, "cate": ["cafe","place"]};
const lis = {
  "x":123.12312321, 
  "y":123521412,
  "cafe": [{name: 123,add:123},{name:111,add:111}]
} //받을 데이터*/


const {List} = uselocation();//uselocation으로 List안에받아옴
function Data(){
  const [Lis,setLis]=useState({"x": List.x, "y": List.y});//무한 렌더링을 해결하기 위해 useState, useEffect 사용
  
  useEffect(()=>{
      const data = async()=>{
          for(let i=0; i<List.category.length;i++){
            await axios.post("http://127.0.0.1:3000/data",{
              x : List.x,
              y : List.y,
              category : List.category[i]
              
              }).then((response)=>{
                for (let key in response) {
                  if (key != "x" && key != "y"){ //x좌표와 y좌표는 이미 처음 state에 담았기 때문에 제외//
                    setLis({...Lis, key: response[key]}); // ex) {...., cafe: [{..},{..}]} 요렇게 되는 거 확인//
                  }
                }
                
            });
          }
      };
      data();
  },[]);
  return Lis;
}

export default Data;
//useEffect내에서 axios로 비동기로 주소에 post한다.
//주소에 List안에 category의 수만큼 for문을 돌린다.
//for문 안에서 해당 정보들을 post하고 각각의 response를 []에 저장한다.