import React from "react";
import axios from 'axios';
var kakaokey="5819749ef21ee7d0aeff60d9a2178b99";

const category_list={ //카테고리 목록
    "cafe" : ["카페","CE7"],
    "restaurant" : ["음식점","FD6"],
    "tour" : ["관광명소","AT4"],
    "culture" : ["문화시설","CT1"],
    "theme" : ["테마카페","CE7"],
    "shopping" : ["의류판매",""],
    "pc" : ["피시방",""],
    "alcohol" : ["술","FD6"]
}

/*------------------------샘플 데이터------------------------
let info={
    x : 126.9256873598537,
    y : 37.558486548510515,
    range : 1000
}
let data=["cafe","tour","shopping"];
------------------------샘플 데이터------------------------*/

/*
데이터를 iterate 하게 보여주기 위한 함수
map 함수를 이용해서 받아온 데이터의 컨테이너를 풀고, 각 가게의 이름 출력
*/
const Show=({data})=>{
    console.log(data[0]["place_name"]);
    data.map(iter=>console.log(iter["place_name"]));
    return(
        <div>
            {data.map(iter=>
                <span>{iter["place_name"]}&nbsp;&nbsp;&nbsp;</span>
            )}
        </div>
    )
}


//메인 컴포넌트

class Process extends React.Component {
    constructor(props){
        super(props)
        this.state={//output에 카테고리 별 검색결과를 리스트로 관리, count에 지금까지 검색된 카테고리 수 저장
            count : 0,
            output : []
        }
    }
/*
component가 로딩된 이후 실행
API에 request를 보내는 axios 함수를 동기적으로 실행하여 setState가 데이터를 놓치지 않도록 구현
카테고리별로 검색이 끝날 때 마다 검색결과를 output으로 넘기고 count를 +1
*/
    componentDidMount(){
        //동기로 구성하기 위해 따로 search 함수 사용
        const search=async()=>{
            for(var tag of data){
                tag=category_list[tag];
                tag[0]=encodeURI(tag[0]);
                await axios({
                    url :`https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=9&sort=accuracy&x=${info.x}&y=${info.y}&radius=${info.range}&category_group_code=${tag[1]}&query=${tag[0]}`,
                    method : "GET",
                    headers : {Authorization: `KakaoAK ${kakaokey}`}
                }).then((response)=>{
                    this.setState({
                        output : [...this.state.output,response.data["documents"]],
                        count : this.state.count+1
                    });
                }).catch((error)=>{
                    console.log(error);
                })
            }
        }

        search()

    }


    render(){{/* <div>{this.state.output.map(value=><p>value</p>)}</div> */}
        return <div>
            {this.state.count>0 ? this.state.output.map(value=><Show data={value}/>   ) : <p> loading </p>}
        </div>
  }
}

export default Process;
