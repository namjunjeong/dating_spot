import {useLocation,useNavigate} from "react-router-dom";
import React,{useState } from "react";
import Display from "./display";
import arr from "./App";
import "../style.css"

let received = {
    "x_coor" : arr.x_coor,
    "y_coor" : arr.y_coor,
};
let dataa =[];
function Final() {
    const navigate = useNavigate();
    const {state} = useLocation();
    let key =state[0];
    const [control,setControl] = useState(true);
    const Controller = () => {
        if (control === true){
            setControl(false);
            state.splice(0,1);
            dataa.push(state);
        }
    }
    Controller();
    const [final,setFinal] = useState(false);
    const onFinal = () => {
        navigate("/result", {state : received})
        alert("선택 내역의 길찾기 시작")
        setFinal(true);
    }
    const onClick = () => {
        navigate("/")
        alert("취소")
        window.location.reload();
    }
    console.log(received)
    return (
        <div>
            {key==="Alc" ? received.alc = state :
            key==="Cafe" ? received.cafe = state :
            key==="Culture" ? received.culture = state :
            key==="Pcroom" ? received.pcroom = state :
            key==="Place" ? received.place = state :
            key==="Restaurant" ? received.restaurant = state :
            key==="Shopping" ? received.shopping = state :
            key==="Themepark" ? received.themepark = state : null}
            <h1>선택하신 내역</h1>
            {dataa.map((_,i) => (
            <div className="flex-container">
                {dataa[i].map((each) => (
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