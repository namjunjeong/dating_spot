import {useLocation,useNavigate} from "react-router-dom";
import React from "react";
import Display from "./display";
import "./style.css"

let received = {};


function Final({arr}) {
    let dataa =[];
    const navigate = useNavigate();
    const location = useLocation();
    let key;
    let collection = [];
    arr=location.state;
    console.log(arr)
    /* 
    
    for (let i=0;i<arr.data.length;i++){
        if (i==0){key = state[i];}
        else{
            collection.push(state[i]);
        }
    }
    dataa.push(collection);
    received.x = arr.x;
    received.y = arr.y; */
    for(let key in arr){
        if(key === "x" || key ==="y") continue
        for(let dat of arr[key]) {
            console.log(dat)
            dataa.push(dat)
        }
    }

    const onFinal = () => {
        navigate("/result", {state : arr})
        alert("선택 내역의 길찾기 시작")
    }
    const onClick = () => {
        navigate("/selectcategory")
        alert("취소")
        window.location.reload();
    }
    received[key] = collection;
    return (
        <div>
            <h1>선택하신 내역</h1>
            <div className="flex-container">
                {dataa.map((each)=> (
                    <Display name={each.place_name} photo={String(each.picture_url).substring(22,String(each.picture_url).length-2)} rating={each.rate}/>
                ))}
            </div>
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