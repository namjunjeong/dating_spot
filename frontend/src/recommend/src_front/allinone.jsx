import React,{useState} from 'react';
import Display from './display';
import {useNavigate} from 'react-router-dom';
import './style.css'

function Category( {keys,arr} ) {
    const navigate = useNavigate();
    const [arrr,setArrr] = useState([]);
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
    const onSent = () => {
        for (let v of arr[keys]) {
            for (let e of checkItems){
                if (e === v.place_name){
                    setArrr(arrr.push(v))
                }
            } 
        }
        navigate("/final", { state : [keys,...arrr]});
        alert("현재 카테고리 선택항목 저장완료! 다음 카테고리를 선택해주세요!")
    }
    return (
        <div>
          <h1 style={{
            fontSize:"3rem",
            textAlign:"center",
            }}>{keys} 추천 리스트</h1>
        <div  className="flex-container">
        {arr[keys].map((cate) => (
            <div key={cate.picture_url}>
            <Display name={cate.place_name} photo={String(cate.picture_url).substring(22,String(cate.picture_url).length-2)} rating={cate.rate}/>
            <input 
              type="checkbox"
              id = {cate.place_name}
              checked={checkItems.includes(cate.place_name)? true:false}
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
            >선택정보 저장</button>
        </div>
      );
}   

export default Category;