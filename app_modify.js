import {uselocation,useNavigate} from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios'



/*const list = {"x":123.12312321, "y":123521412, "cate": ["cafe","place"]};
const lis = {
  "x":123.12312321, 
  "y":123521412,
  "cafe": [{name: 123,add:123},{name:111,add:111}]
} //받을 데이터*/


const List=uselocation();//uselocation으로 List안에받아옴
function data(){
const [Lis,setLis]=useState([]);//무한 렌더링을 해결하기 위해 useState, useEffect 사용
useEffect(()=>{
    const Data = async()=>{
        for(let i=0; i<List.category.length;i++){
          await axios.post("http://127.0.0.1:3000/data",{
            x : List.x,
            y : List.y,
            category : List.category[i]
            
          }).then((response)=>{
            setLis(response.data);
        });
      }
       }
},[]);

}

export default data;
//useEffect내에서 axios로 비동기로 주소에 post한다.
//주소에 List안에 category의 수만큼 for문을 돌린다.
//for문 안에서 해당 정보들을 post하고 각각의 response를 []에 저장한다.