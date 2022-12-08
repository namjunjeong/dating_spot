import styled from "styled-components";
import { storeState } from "../../store/store.js";
import { storeLocation } from "../../store/store.js";
import { useSearchParams, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

const CategoryPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useRecoilState(storeState);

  const location2 = useRecoilValue(storeLocation);
  const category2 = useRecoilValue(storeState);
  console.log(category2);
  console.log(location2);

  const list = searchParams.getAll("filter");

  const addQuery = (e) => {
    const currentQuery = e.target.dataset.query.toString(); //현재 누른 타겟의 쿼리
    const prevQuery = searchParams.getAll("filter"); //이전에 가지고 있던 쿼리 불러오기

    if (prevQuery.includes(currentQuery)) {
      //이전에 가지고 있던 쿼리가 타겟의 쿼리를 가지고 있다면 (한 번 더 눌렸다면)
      //현재 누른 타겟의 쿼리 제거
      const newQuery = prevQuery.filter((query) => query !== currentQuery);
      setSearchParams({
        filter: newQuery,
      });
      setCategory(newQuery);
    } else {
      //아니라면 쿼리 추가
      setSearchParams({
        filter: [...prevQuery, currentQuery],
      });
      setCategory((prevQuery) => [...prevQuery, currentQuery]);
    }
  };

  return (
    <>
      <Container>
        <Button
          data-query="cafe"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("cafe")} //현재 searchParams에 cafe있는지 확인
        >
          {" "}
          카페{" "}
        </Button>
        <Button
          data-query="restaurant"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("restaurant")}
        >
          음식점
        </Button>
        <Button
          data-query="stroll"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("stroll")}
        >
          관광명소
        </Button>
        <Button
          data-query="gallery"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("gallery")}
        >
          문화시설
        </Button>
        <Button
          data-query="themeCafe"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("themeCafe")}
        >
          테마카페
        </Button>
        <Button
          data-query="shopping"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("shopping")}
        >
          쇼핑
        </Button>
        <Button
          data-query="pcroom"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("pcroom")}
        >
          피시방
        </Button>
        <Button
          data-query="drink"
          onClick={addQuery}
          isactive={searchParams.getAll("filter").includes("drink")}
        >
          술
        </Button>

        <Link
          to="/result"
          state={{
            location: location2,
            category: category2,
          }}
        >
          <ButtonNext>다음!</ButtonNext>
        </Link>
      </Container>
    </>
  );
};

export default CategoryPage;

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 1px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  margin-bottom: 20px;
  margin-left: 5px;
  width: 30%;
  color: black;
  background-color: ${({ isactive }) => (isactive ? "lightblue" : "pink")};
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
const ButtonNext = styled.button`
  margin-bottom: 20px;
  margin-left: 5px;
  width: 30%;
  color: black;
  background-color: violet;
  height: 50px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
