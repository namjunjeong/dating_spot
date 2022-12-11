import {useLocation,useNavigate} from "react-router-dom";
import React,{useState, useEffect} from "react";
import Display from "./display";
import arr from "./Firststep";
import "./style.css"

let received = {
    /*"x_coor" : realar.x_coor,
    "y_coor" : realar.y_coor,*/
};
let dataa =[];
function Final({arr}) {
    useEffect(()=>{
        received.x_corr = arr.x_coor;
        received.y_corr = arr.y_coor;
    },[]);
    const navigate = useNavigate();
    const {state} = useLocation();
    let key;
    const [control,setControl] = useState(true);
    const Controller = () => {
        if (control === true){
            setControl(false);
            key=state[0];
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
    console.log(received);
    return (
        <div>
            {key==="alc" ? received.alc = state :
            key==="cafe" ? received.cafe = state :
            key==="culture" ? received.culture = state :
            key==="pcroom" ? received.pcroom = state :
            key==="place" ? received.place = state :
            key==="restaurant" ? received.restaurant = state :
            key==="shopping" ? received.shopping = state :
            key==="themepark" ? received.themepark = state : null}
            <h1>선택하신 내역</h1>
            {dataa.map((_,i) => (
            <div className="flex-container">
                {dataa[i].map((each) => (
                    <Display name={each.name} address = {each.address} photo={each.image}/>
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