import React,{useState} from 'react';
import arr from '../Firststep';
import Display from '../display';
import {useNavigate} from 'react-router-dom';


function Activity() {
    const navigate = useNavigate();
    const [arrr,setArrr] = useState([]);
    const list = arr.activity;
    const [checkItems, setCheckItems] = useState([]);
    const handleCheck = (e) => {
        if (e.target.checked) {
            const nowCheck = [...checkItems, e.target.id]
            setCheckItems([...checkItems,e.target.id]);
            console.log(nowCheck)
        } else {
          setCheckItems(checkItems.filter((el) => el !== e.target.id))
          console.log('선택 해제');
        }
    }
    const [send,setSend] = useState(false);
    function onSent() {
        for (let v of list) {
            for (let i in checkItems){
                if (checkItems[i] === v.name){
                    setArrr(arrr.push(v));
                }
            } 
        }
        alert("현 카테고리 선택 목록 저장")
        setSend(true);
        navigate("/Final", { state : ["Activity",...arrr]});
        console.log(["Activity",...arrr])
    }
    return (
        <div>
          <h1 style={{
            fontSize:"3rem",
            textAlign:"center",
            }}>엑티비티 추천 리스트</h1>
        <div  className="flex-container">
        {list.map((cate) => (
            <div>
            <Display name={cate.name} address = {cate.address} photo={cate.image} />
            <input 
              type="checkbox"
              id = {cate.name}
              value = {cate}
              checked={checkItems.includes(cate.name)? true:false}
              onChange={handleCheck}
              style ={{marginLeft:"2rem", marginBottom:"2rem"}}
            ></input>선택   
            </div>
        ))}
        </div>
        <button
            style={{
            marginBottom: "3rem",
            marginRight: "6rem",
            width: "10%",
            float: "right",
            }}
            onClick={onSent}
            disabled={send}
            >선택정보 저장</button>
        </div>
        

      );
}   

export default Activity;
