import {useLocation,useNavigate} from "react-router-dom";
import React from "react";
import Display from "./display";
import "./style.css"

let received = {};

let dataa =[];
function Final({arr}) {
    const navigate = useNavigate();
    const {state} = useLocation();
    let key;
    let collection = [];
    for (let i=0;i<state.length;i++){
        if (i==0){key = state[i];}
        else{
            collection.push(state[i]);
        }
    }
    dataa.push(collection);
    received.x = arr.x;
    received.y = arr.y;
    const onFinal = () => {
        navigate("/result", {state : received})
        alert("선택 내역의 길찾기 시작")
        console.log(received)
    }
    const onClick = () => {
        navigate("/home")
        alert("취소")
        window.location.reload();
    }
    received[key] = collection;
    return (
        <div>
            <h1>선택하신 내역</h1>
            {dataa.map((_,i) => (
            <div className="flex-container">
                {dataa[i].map((each)=> (
                    <Display name={each.place_name} photo={String(each.picture_url).substring(22,String(each.picture_url).length-2)}/>
                ))}
            </div>
            ))}
            <button
            style={{
                marginBottom: "3rem",
                width: "10%",
                float: "right",
                }}
                onClick={onClick}
                >홈으로
            </button>
            <button
            style={{
                marginBottom: "3rem",
                marginRight: "1rem",
                width: "10%",
                float: "right",
                }}
                onClick={onFinal}
                >길찾기
            </button>
        </div>
    )
}

export default Final;