import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const RandomPick = (e) => {
    let datacontainer;
    (async () => {
      await axios({
        url: "http://127.0.0.1:3000/spot",
        method: "get",
      })
        .then((response) => {
          datacontainer = response.data;
          let rand = Math.floor(Math.random() * (datacontainer.length ));
          console.log(rand)
          navigate("/result", { state: datacontainer[rand] });
        })
        .catch((error) => {
          console.log(error);
          setFlag(true);
        });
    })();
  };
  return (
    <div className="container">
      <div className="word">
        <span>Shall_We_Date?</span>
      </div>
      <div className="buttonBox">
        <div>
          <Link to="/selectcategory">
            <button className="btn startbt">두근두근 코스만들기</button>
          </Link>
        </div>
        <div>
          {flag === false ? (
            <button className="btn randombt" onClick={RandomPick}>
              두근두근 추천받기
            </button>
          ) : (
            <span>에러 발생!</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Start;
