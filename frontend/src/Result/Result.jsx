import "./Result.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import default_photo from "./img/default_photo.png"

/*카카오 api를 js에서 사용*/
const { kakao } = window;

/*key에 따라서 올바른 sprite 위치 정보 return*/
const WhatCategory = (key) => {
  let category;
  if (key === "stroll") {
    category = new kakao.maps.Point(0, 0);
  } else if (key === "cafe") {
    category = new kakao.maps.Point(0, 30);
  } else if (key === "restaurant") {
    category = new kakao.maps.Point(0, 60);
  } else if (key === "drink") {
    category = new kakao.maps.Point(30, 0);
  } else if (key === "gallery") {
    category = new kakao.maps.Point(30, 30);
  } else if (key === "shopping") {
    category = new kakao.maps.Point(30, 60);
  } else if (key === "themeCafe") {
    category = new kakao.maps.Point(60, 0);
  } else if (key === "pcroom") {
    category = new kakao.maps.Point(60, 30);
  }
  return category;
};

//메인함수
const Result = () => {
  const location = useLocation();
  const [recommend, setRecommend] = useState(false);
  const [datacontainerstate, setDatacontainerstate] = useState();
  const addRecommend = (e) => {
    //서버에 장소를 추가시키는 함수
    e.preventDefault();
    (async () => {
      await axios({
        url: "http://127.0.0.1:3000/spot",
        method: "post",
        data: datacontainerstate,
      })
        .then((response) => {
          if (response.status === 201) {
            setRecommend(true);
          }
        })
        .catch((error) => {
          alert("다른사람의 기록을 또 추천할 수 없어요!")
        });
    })();
  };

  useEffect(() => {
    const MakeOverlay = (place_name, place_url, picture, x, y, rate) => {
      //오버레이 html을 만들어주는 함수
      if(rate==null)rate=0;
      if(picture==undefined) picture="https://ifh.cc/g/qoaQgA.png"
      else picture='//'+String(picture).substring(22,String(picture).length-2)
      return (
        '<div class="wrap">' +
        '<div class="overlaybox">' +
        '<div class="textbox">' +
        '<span class="boxtitle">' +
        place_name +
        "</span>" +
        '<span class="rate">⭐' +
        rate +
        "</span>" +
        "</div>" +
        '<div class="imgbox"><img class="picture" src="' +
        picture+
        '"/></div>' +
        '<div class="buttonbox">' +
        '<div><button class="detail resultbutton" type="button" onclick="window.open(\'' +
        place_url +
        "')\" >장소 상세정보</button></div>" +
        '<div><button class="way resultbutton" type="button" onclick="window.open(\'https://map.kakao.com/link/to/' +
        place_name +
        "," +
        y +
        "," +
        x +
        "')\">가는 길 찾기</button></div>" +
        "</div>" +
        "</div>" +
        "</div>"
      );
    };

    let map_xcoor;
    let map_ycoor;
    if (location.state === null) {
      //이전 컴포넌트로부터 받아온 state에서 중심 x좌표,y좌표 얻어오기
      map_xcoor = "126.923778562273";
      map_ycoor = "37.5568707448873";
    } else {
      map_xcoor = location.state.x;
      map_ycoor = location.state.y;
    }

    /* 지도생성 */
    const container = document.getElementById("Map");
    const options = {
      center: new kakao.maps.LatLng(map_ycoor, map_xcoor),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);
    /* 지도생성 완료*/
    let datacontainer=location.state;
    setDatacontainerstate(location.state); //서버에 정보 추가를 위해 state 사용
    let markerImageSrc = "https://ifh.cc/g/ORcQHb.png"; //marker sprite img

    let markerContainer = [];
    let overlayContainer = [];
    let num = 0;
    let spriteMaxSize = new kakao.maps.Size(90, 90);
    let imagesize = new kakao.maps.Size(30, 30);
    let CategoryImage;
    for (const key in datacontainer) {
      if (key === "x" || key === "y") {
        //필요없는 데이터 continue
        continue;
      } else {
        CategoryImage = WhatCategory(key); //key에 맞는 sprite img 추출
        for (var i = 0; i < datacontainer[key].length; i++) {
          //키 별로 컨테이너를 돌며 데이터 marker, overlay 생성
          let data = datacontainer[key][i];
          let position = new kakao.maps.LatLng(data.y, data.x);

          /* 마커 생성 */
          let imageOptions = {
            spriteOrigin: CategoryImage,
            spriteSize: spriteMaxSize,
          };
          let markerImage = new kakao.maps.MarkerImage(
            markerImageSrc,
            imagesize,
            imageOptions
          );

          let marker = new kakao.maps.Marker({
            position: position,
            image: markerImage,
          });
          marker.flag = 0;
          /* 마커 생성 완료 */

          /* 오버레이 생성 */
          var content = MakeOverlay(
            data.place_name,
            data.place_url,
            data.picture_url,
            data.x,
            data.y,
            data.rate
          );
          var overlay = new kakao.maps.CustomOverlay({
            content: content,
            position: marker.getPosition(),
          });
          /*오버레이 생성 완료 */

          overlayContainer.push(overlay);

          /*
          마커와 오버레이를 연결하기 위해 마커별로 인덱스 할당
          오버레이 컨테이너에 마커 인덱스 순서대로 연결
          이를통해 마커와 오버레이를 동기화
          */
          marker.ind = num;
          kakao.maps.event.addListener(marker, "click", () => {
            if (marker.flag === 0) {
              overlayContainer[marker.ind].setMap(map);
              marker.flag = 1;
            } else {
              overlayContainer[marker.ind].setMap(null);
              marker.flag = 0;
            }
          });

          markerContainer.push(marker); //완성된 마커를 container에 push
          num = num + 1;
        }
      }
    }
    //마커 지도에 생성
    for (var k = 0; k < markerContainer.length; k++) {
      markerContainer[k].setMap(map);
    }
  }, []);

  return (
    <div className="Container">
      <div className="Map_Container" id="Map"></div>
      <div className="user">
        <div>
          <Link to="/">
            <button className="rightbutton">다시 검색하기</button>
          </Link>
        </div>
        {recommend === false ? (
          <button className="rightbuttondown" onClick={addRecommend}>
            내 결과 다른사람에게 추천하기
          </button>
        ) : (
          <div className="recommendbox">
            <span className="recommend">저장완료!</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Result;
