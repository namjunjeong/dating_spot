import './App.css';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const {kakao} = window;

const WhatCategory=(key)=>{
  let category;
  if (key==='stroll'){
    category=new kakao.maps.Point(0,0);//00
  }else if(key==='cafe'){
    category=new kakao.maps.Point(0,30);
  }else if(key==='restaurant'){
    category=new kakao.maps.Point(0,60);
  }else if(key==='drink'){
    category=new kakao.maps.Point(30,0);
  }else if(key==='gallery'){
    category=new kakao.maps.Point(30,30);
  }else if(key==='shopping'){
    category=new kakao.maps.Point(30,60);
  }else if(key==='themeCafe'){
    category=new kakao.maps.Point(60,0);
  }else if(key==='pcroom'){
    category=new kakao.maps.Point(60,30);
  }
  return category;
}

const addRecommend=(e)=>{
  e.preventDefault();
  console.log('recommend');
}

const App = ({})=>{
  const location = useLocation();

  useEffect(()=> {
    const MakeOverlay =(place_name,place_url,picture,x,y,rate)=>{
      return(
        '<div class="wrap">'+
          '<div class="overlaybox">'+
            '<div>'+
              '<span class="boxtitle">'+place_name+'</span>'+
              '<span class="rate">⭐'+rate+'</span>'+
            '</div>'+
            '<div class="imgbox"><img class="picture" src="//'+picture+'"/></div>'+
            '<div class="buttonbox">'+
              '<div><button class="detail resultbutton" type="button" onclick="window.open(\''+place_url+'\')" >장소 상세정보</button></div>'+
              '<div><button class="way resultbutton" type="button" onclick="window.open(\'https://map.kakao.com/link/to/'+place_name+','+y+','+x+'\')">가는 길 찾기</button></div>'+
            '</div>'+
          '</div>' +
        '</div>'
      )
    }

    
    let map_xcoor;
    let map_ycoor;
    if (location.state === null){
      map_xcoor = "126.923778562273";
      map_ycoor = "37.5568707448873";
    }else{
      map_xcoor = location.state.x_coor;
      map_ycoor = location.state.y_coor;
    } 

    /* 지도생성 */
    const container = document.getElementById('Map');
    const options = {
      center: new kakao.maps.LatLng(map_ycoor, map_xcoor),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);

    let datacontainer=location.state;
    let markerImageSrc='https://ifh.cc/g/ORcQHb.png';
    
    let markerContainer=[];
    let overlayContainer=[];
    let num=0
    let spriteMaxSize=new kakao.maps.Size(90,90);
    let imagesize=new kakao.maps.Size(30,30);
    let CategoryImage;
    for (const key in datacontainer){
      if ((key==="x_coor") || (key==="y_coor")){
        continue;
      }else{
        CategoryImage=WhatCategory(key);
        for(var i=0; i<datacontainer[key].length;i++){
          let data=datacontainer[key][i];
          let position=new kakao.maps.LatLng(data.y,data.x);
          let imageOptions={
            spriteOrigin : CategoryImage,
            spriteSize: spriteMaxSize
          };
          let markerImage=new kakao.maps.MarkerImage(markerImageSrc,imagesize,imageOptions);

          let marker=new kakao.maps.Marker({
            position : position,
            image : markerImage
          })
          marker.flag=0;

          var content = MakeOverlay(data.place_name,data.place_url,data.picture,data.x,data.y,data.rate)
          var overlay=new kakao.maps.CustomOverlay({
            content: content,
            position: marker.getPosition()
          });
          overlayContainer.push(overlay);
          marker.ind=num;
          kakao.maps.event.addListener(marker, 'click', ()=>{
            if(marker.flag===0){
              overlayContainer[marker.ind].setMap(map);
              marker.flag=1;
            }else{
              overlayContainer[marker.ind].setMap(null);
              marker.flag=0;
            }
          })
          markerContainer.push(marker);
          num=num+1;
        }
      }
    } 
    for (var i=0;i< markerContainer.length;i++){
      markerContainer[i].setMap(map);
    }
  },[]); 



  return(
    <div className="Container">
      <div className="Map_Container" id='Map'></div>
      <div className="user">
        <div><Link to="/"><button className='rightbutton'>다시 검색하기</button></Link></div>
        <button className="rightbutton" onClick={addRecommend}>내 결과 추천하기</button>
      </div>
    </div>
  )
}
export default App;
