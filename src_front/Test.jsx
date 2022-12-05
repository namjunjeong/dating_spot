import {useState} from 'react';
import List from './List';


function Test() {
    let total_list = [];
    const [index,setIndex] = useState("xxx");
    const onSelect = (event) => {
        setIndex(event.target.value);
    
    };
    return (
        <div>
            <h1>Select a Category</h1>
            <select value={index} onChange={onSelect} style = {{width: "10rem"}}>
                <option value="xxx" > Select One-by-One</option>
                <option value="0" >엑티비티 </option>
                <option value="1"> 술집</option>
                <option value="2"> 카페 </option>
                <option value="3"> 문화시설 </option>
                <option value="4"> PC방 </option>
                <option value="5"> 관광명소 </option>
                <option value="6"> 음식점 </option>
                <option value="7"> 쇼핑 </option>
                <option value="8"> 테마파크 </option>
            </select>
            {index === "0" ? <List num = {Number(index)} kind = "엑티비티"/>: null}
            {index === "1" ? <List num = {Number(index)} kind = "술집"/>: null}
            {index === "2" ? <List num = {Number(index)} kind = "카페"/>: null}
            {index === "3" ? <List num = {Number(index)} kind = "문화시설"/>: null}
            {index === "4" ? <List num = {Number(index)} kind = "PC방"/>: null}
            {index === "5" ? <List num = {Number(index)} kind = "관광명소"/>: null}
            {index === "6" ? <List num = {Number(index)} kind = "음식점"/>: null}
            {index === "7" ? <List num = {Number(index)} kind = "쇼핑"/>: null}
            {index === "8" ? <List num = {Number(index)} kind = "테마파크"/>: null}
        </div>
    )
}

export default Test;