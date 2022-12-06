import './App.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const {kakao} = window;



const App = ({props})=>{
  const location = useLocation();

  useEffect(()=> {
    const MakeOverlay =(place_name,place_url,picture,x,y)=>{
      return(
        '<div class="wrap">'+
          '<div class="overlaybox">'+
            '<div class="boxtitle">'+place_name+
              '<div class="close" onclick="closeOverlay()" title="닫기"></div>'+
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
    let markerImageSrc='https://ifh.cc/g/lQ9xnN.png';
    
    let markerContainer={};
    let overlayContainer={};

    for (const key in datacontainer){
      if ((key==="x_coor") || (key==="y_coor")){
        continue;
      }else{
        if (!(key in markerContainer)) {
          markerContainer[key]=[];
          overlayContainer[key]=[];
        }
        for(var i=0; i<datacontainer[key].length;i++){
          let data=datacontainer[key][i];
          let position=new kakao.maps.LatLng(data.y,data.x);
          let imagesize=new kakao.maps.Size(30,30);
          let imageOptions={
            spriteOrigin : new kakao.maps.Point(30,30),
            spriteSize: new kakao.maps.Size(90,90)
          };
          let markerImage=new kakao.maps.MarkerImage(markerImageSrc,imagesize,imageOptions);
          let marker=new kakao.maps.Marker({
            position : position,
            image : markerImage
          })

          var content = MakeOverlay(data.place_name,data.place_url,data.picture,data.x,data.y)
          var overlay=new kakao.maps.CustomOverlay({
            content: content,
            position: marker.getPosition()
          });
          kakao.maps.event.addListener(marker, 'click', function(){
            console.log("click");
            overlay.setMap(map);
          })

          markerContainer[key].push(marker);
          overlayContainer[key].push(overlay);
        }
      }
    } 


    for (const key in markerContainer){
      for (var i=0;i< markerContainer[key].length;i++){
        markerContainer[key][i].setMap(map);
      }
    }


  },[]); 



  return(
    <div className="Map_Container" id='Map'></div>
  )
}
export default App;
