//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
//import React, { Link, useState } from "react";
import styled from 'styled-components';
//import Map from './map.mjs';
import Location from './map2.mjs'
import {atom} from 'recoil';
import { storeState } from '../store/store.js';
import { storeLocation } from '../store/store.js';
import {useSearchParams, Link} from 'react-router-dom';
import { useRecoilState, 
  useRecoilValue, 
  useSetRecoilState, 
  useResetRecoilState 
} from 'recoil';
//import './category.css';

const CategoryPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useRecoilState(storeState);

  const location2 = useRecoilValue(storeLocation);
  const category2 = useRecoilValue(storeState);
  console.log(category2);
  console.log(location2);

  const list = searchParams.getAll('filter')

  const addQuery = (e: React.SyntheticEvent) => {
    const currentQuery = e.target.dataset.query.toString(); //현재 누른 타겟의 쿼리
    const prevQuery = searchParams.getAll('filter'); //이전에 가지고 있던 쿼리 불러오기

    if (prevQuery.includes(currentQuery)) {
      //이전에 가지고 있던 쿼리가 타겟의 쿼리를 가지고 있다면 (한 번 더 눌렸다면) 
      //현재 누른 타겟의 쿼리 제거
      const newQuery = prevQuery.filter((query) => query !== currentQuery);
      setSearchParams({
        filter: newQuery,
      });
      setCategory(newQuery)
    }else {
      //아니라면 쿼리 추가
      setSearchParams({
        filter: [...prevQuery, currentQuery],
      });
      setCategory(prevQuery => [...prevQuery, currentQuery])
    }
  };

  return (
    <>
  
    <Container>
      <Button data-query="cafe" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('cafe')} //현재 searchParams에 cafe있는지 확인
              > 카페 </Button>
      <Button data-query="restaurant" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('restaurant')}
              >음식점</Button>
      <Button data-query="stroll" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('stroll')}
              >관광명소</Button>
      <Button data-query="gallery" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('gallery')}
              >문화시설</Button>
      <Button data-query="themeCafe" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('themeCafe')}
              >테마카페</Button>
      <Button data-query="shopping" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('shopping')}
              >쇼핑</Button>
      <Button data-query="pcroom" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('pcroom')}
              >피시방</Button>
      <Button data-query="drink" 
              onClick={addQuery}
              isactive={searchParams.getAll('filter').includes('drink')}
              >술</Button>

      <Link to="/test" state={{
            location : location2,
            category : category2
          }}>
          <ButtonNext>다음!</ButtonNext>
      </Link> 
    </Container>

    
      
    </>
  );
};

export default CategoryPage;

const Container = styled.div `
  width: 100%;
  height: 100px;
  margin-top: 1px;
  flex-direction: row;
  flex-wrap : wrap;
  align-items: center;
  justify-content: space-between;
`
// interface SelectedProps {
//   isactive : boolean
// }

const Button = styled.button`
  margin-bottom: 20px;
  margin-left: 5px;
  width: 30%;
  color: black;
  background-color: ${({ isactive }) => isactive? 'lightblue' : 'pink'};
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`
const ButtonNext = styled.button`
  margin-bottom: 20px;
  margin-left: 5px;
  width: 30%;
  color: black;
  background-color: violet ;
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`




// const Category = () => {
//   const arr = [{ id: "카페" }, { id: "음식점" }, { id: "관광명소" }, 
//                 { id: "문화시설" }, { id: "테마카페" }, { id: "쇼핑" },
//                 { id: "엑티비티" }, { id: "피시방" }, { id: "술" }];
//   const [pick, setPick] = useState(arr);
//   const [select, setSelect] = useState([]); //select에 선택한 값들이 담김


//   //배열.map((현재값) => 수행하고 싶은 일)
//   return (
//     <div className="category">
//       {pick.map((item) => {
//         return(
//           <>
//             <button
//               key={item.id}
//               onClick={() => {
//                 !select.includes(item.id) //select 안에 item.id가 있는지 확인
//                   ? setSelect((select) => [...select, item.id]) //없으면 select에 추가
//                   : setSelect(select.filter((button) => button !== item.id)); //filter함수로 누른 버튼과 select안의 item값 비교하여 id지우기

//               }}
//               className={"btn"+
//                 (select.includes(item.id) //select안에 item.id있는지 확인
//                   ? " active" //있으면 css를 btn.active로 변경
//                   : "") //없으면 css를 .btn으로 변경
//               }
              
//             >
//               {item.id}
//             </button>
//           </>
//         );
//       })}
//     </div>
//   );
// };

