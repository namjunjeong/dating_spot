import {useLocation,useNavigate} from "react-router-dom";
import React,{useState } from "react";
import Display from "../display";
import "../style.css"

let data = []
function Final() {
    const navigate = useNavigate();
    const {state} = useLocation();
    data.push(state);
    console.log(data)
    const [final,setFinal] = useState(false);
    const onFinal = () => {
        navigate("/result", {state : data})
        alert("선택 내역의 길찾기 시작")
        setFinal(true);
    }
    const onClick = () => {
        navigate("/")
        alert("취소")
        window.location.reload();
    }
    return (
        <div>
            <h1>선택하신 내역</h1>
            {data.map((_,i) => (
            <div className="flex-container">
                {data[i].map((each) => (
                    <Display name={each.name} address = {each.address} photo={each.image} />
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
                disabled={final}
                >길찾기
            </button>
        </div>
    )
}

export default Final;