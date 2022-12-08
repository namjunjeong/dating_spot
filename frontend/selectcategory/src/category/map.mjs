/*global kakao*/

import React, {Component, useEffect, useState} from 'react';
import { UNSAFE_NavigationContext, useNavigate, useSearchParams, Link } from "react-router-dom";
//import CategoryPage from './Category';
import styled from 'styled-components';


//import './map.css'
const { kakao } = window;


class Map extends Component {

    state = {  // state의 default 값을 설정
        x: 37.536172,
        y: 126.976978
    }

    componentDidMount(){    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
        const script = document.createElement('script');
        script.async = true;    // 브라우저가 페이지를 파싱되는 동안에도 스크립트가 실행됨.
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=d48dba20ea965d5889d61d9144c56a86&autoload=false";
        document.head.appendChild(script);
        
        script.onload = () => { // 페이지가 로드될 때 특정 함수를 호출시 사용
            kakao.maps.load(() => { // 가져온 api에 포함된 함수 실행
                let container = document.getElementById('map'); //render에서 만들어 둔 map 아이디를 가진 DOM 레퍼런스
                let options = {
                    center: new kakao.maps.LatLng(37.54465286, 127.05589957), //중심좌표
                    level: 5, //확대정도
                }
                
                let map = new kakao.maps.Map(container, options); // 객체를 리턴해줄 map작성!

                // 마커가 표시될 위치입니다 
                let markerPosition  = new kakao.maps.LatLng(37.54465286, 127.05589957); //중심 좌표와 같은 곳

                // 지도를 클릭한 위치에 표출할 마커를 생성
                let marker = new kakao.maps.Marker({ 
                    // 지도 중심좌표에 마커를 생성합니다 
                    position: map.getCenter() 
                }); 

                marker.setMap(map);  //마커를 지도 위에 표시
                
                //원 만들기
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

                //원 지도에 올리기
                circle.setMap(map);
                //circle.getMap();  //원이 올라가 있는 지도를 반환 (다음 페이지로 넘기기)

                // 기존의 함수 형태로 하면 this.state에서 this.state가 undefined이기 때문에 
                // Arrow function을 이용해 상위 context의 객체를 this로 받아올 수 있도록 하여 현재 state 값을 변경
                kakao.maps.event.addListener(map, 'click', (mouseEvent) => {        
    
                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    var latlng = mouseEvent.latLng; 
                    
                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);
                    // 클릭한 위치에 원 올려두기
                    circle.setPosition(latlng);
                    
                    // 클릭한 위치의 위도와 경도를 state의 x와 y에 setState해주기
                    this.setState({
                        x: latlng.getLat(),  // this.state.x를 마커 위치의 위도로 값을 변경
                        y: latlng.getLng()   // this.state.y를 마커 위치의 경도로 값을 변경
                    });

                });
            });
        };

        
    }
    
    render(){
        return(
            <>
            <divv>
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
                <h3>클릭한 위치의 위도는 : {this.state.x}</h3>
                <h3>클릭한 위치의 경도는 : {this.state.y}</h3>

            <Link to="/test" state={{
                x : this.state.x,
                y : this.state.y,
                //category : Category.filter
            }}>
                <ButtonNext>다음!</ButtonNext>
            </Link>
            </divv>
            </>
        );
    }
}
export default Map;
const divv = styled.div `
    width: '100%',
    display: 'inline-block',
    marginLeft: '10px',
    marginRight: '10px',
`

const ButtonNext = styled.button`
  margin-bottom: 20px;
  margin-left: 5px;
  width: 30%;
  color: black;
  background-color: violet ;
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`
// function Next() {
//     const navigate = useNavigate();

//     const move = () => {
//         navigate('/next', {
//             state: {
//                 x : this.state.x,
//                 y : this.state.y
//             }
//         });
//     };
//     return (
//         <div>
//             <button onClick={move}>다음!</button>
//         </div>
//     )

// };


