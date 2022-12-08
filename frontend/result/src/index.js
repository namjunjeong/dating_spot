import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Home (){
  let sampledata = {
    x_coor : "126.923778562273",
    y_coor : "37.5568707448873",
    cafe : [
      {
        place_name : "1984",
        x: "126.922881704192",
        y: "37.5573639089622",
        picture : "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2F34E424DE54454CCB8C5623E96B979B9F",
        place_url : "https://place.map.kakao.com/23634722",
        rate : "4.3"
      },
      {
        place_name : "카페공명",
        x : "126.926352615326",
        y : "37.5598708965573",
        picture : "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flocalfiy%2Fsearchregister_1919726515",
        place_url : "https://place.map.kakao.com/1797970569",
        rate : "4.3"
      },
    ],
    restaurant : [
      {
        place_name : "하이디라오 홍대지점",
        x: "126.924760602353",
        y: "37.5571921297692",
        picture : "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fplace%2FCC5A124B50294DFCB690BD5E9EC7F28E",
        place_url : "http://place.map.kakao.com/1622865435",
        rate : "4.3"
      },
      {
        place_name : "중화복춘",
        x: "126.924296449184",
        y: "37.5595596531777",
        picture : "t1.kakaocdn.net/thumb/T800x0.q80/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Fmystore%2FA19E0A5AF48C42F681B4C5CC56E70F42",
        place_url : "https://place.map.kakao.com/965893653",
        rate : "4.3"
      },
    ]
  }
  return(<div>
      <p>hello</p>
      <Link to="/App" state={sampledata}>
        <button>App으로 이동</button>
      </Link>
    </div>
  )
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/App" element={<App/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
