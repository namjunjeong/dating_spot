import {uselocation,useNavigate} from "react-router-dom";
import React,{useState} from "react";
import axios from 'axios'

class Process extends React.Component {
  constructor(props){
      super(props)
      this.state={
          count : 0,
          list : []
      }
  }
}

const Loc=uselocation();
const data = async()=>{
  for(let i=0; i<Loc.category.length;i++){
    await axios.post("http://127.0.0.1:3000/data",{
      x:Loc.x,
      y:Loc.y,
      category:Loc.category
      
    }).then((response)=>{
      this.setState({
          list : [response],
          count : this.state.count+1
      });
  }).catch((error)=>{
      console.log(error);
  })
}
 }


