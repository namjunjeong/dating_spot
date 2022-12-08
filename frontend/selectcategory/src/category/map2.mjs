/*global kakao*/ 
import React, { useEffect, useState} from 'react';
import { useRecoilState, 
    useRecoilValue, 
    useSetRecoilState, 
    useResetRecoilState 
  } from 'recoil';
  import {atom} from 'recoil';
  import { storeLocation } from '../store/store.js';

const Location=()=>{
    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [location, setLocation] = useRecoilState(storeLocation);

    const location2 = useRecoilState(storeLocation);
    
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.54465286, 127.05589957),
      level: 5
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.54465286, 127.05589957); 
    var marker = new kakao.maps.Marker({
      position: map.getCenter()
  });
  marker.setMap(map);

  var circle = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.54465286, 127.05589957),  // 원의 중심좌표 입니다 
    radius: 1000, // 미터 단위의 원의 반지름입니다 
    strokeWeight: 5, // 선의 두께입니다 
    strokeColor: '#75B8FA', // 선의 색깔입니다
    strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'dashed', // 선의 스타일 입니다
    fillColor: '#CFE7FF', // 채우기 색깔입니다
    fillOpacity: 0.4  // 채우기 불투명도 입니다   
  }); 

  circle.setMap(map);
  kakao.maps.event.addListener(map, 'click', function(mouseEvent){
    
    //클릭한 위도, 경도 정보를 가져옵니다.
    const latlng = mouseEvent.latLng;
    
    //위도 경도 값을 useState를 이용해서 useEffect 밖으로 빼냅니다.
    setLatitude(latlng.getLat())
    setLongitude(latlng.getLng())

    setLocation([latlng.getLat(), latlng.getLng()])


    //마커 위치를 클릭한 위치로 옮깁니다.
    marker.setPosition(latlng);
    circle.setPosition(latlng);
    //마커를 지도상에 보여줍니다.
    marker.setMap(map);
  })
  
    }, [])


    return (
      <>
      <h2> 🔎 데이트 장소를 선택하세요! </h2>
        <div>
            <div id="map" style={{ width: '99%', height: '500px' }}></div>       
        </div>
      <h2> 💗 데이트 카테고리를 선택하세요! </h2>
      </>
    )
}


    

export default Location;