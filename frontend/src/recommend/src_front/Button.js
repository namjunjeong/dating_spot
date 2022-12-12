import { useNavigate } from "react-router-dom"
import './style.css';
function Button({type,list}) {
    const navigate = useNavigate();
    const onClick=()=>{
        navigate(`/${type}`, {state:list})
    }
    return (
        <button onClick={onClick} className="btn1">{type}</button> 
    )
}

export default Button;