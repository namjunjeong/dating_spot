import {useState} from 'react';
import LoadingWithMask from "./Loading";
import {Link} from 'react-router-dom';

const list = {"x":123.12312321, "y":123521412, "cate": ["cafe","place"]};
const lis = {
  "x":123.12312321, 
  "y":123521412,
  "cafe": [{name: 123,add:123},{name:111,add:111}]
} //받을 데이터

const Data = () => {
  let state = list;
  let arr = {};
  const [count,setCount] = useState(0);
  return (
    <div>
      {state.cate.map((c) => (
        arr.coor_x = state.x,
        arr.coor_y = state.y,
        arr.cate = c,
        //<컴포넌트 /> 로 보낸 데이터에 대한 리턴값으로 카테고리 별 상세 가게 정보 받아옴//
        setCount(count+1)
      ))
      }
    </div>
  )
}

export default Data;

 

