import React from "react";
import axios from 'axios';
var kakaokey="5819749ef21ee7d0aeff60d9a2178b99";
const category_list={ 
    "cafe" : ["카페","CE7"],
    "restaurant" : ["음식점","FD6"],
    "tour" : ["관광명소","AT4"],
    "culture" : ["문화시설","CT1"],
    "theme" : ["테마카페","CE7"],
    "shopping" : ["의류판매",""],
    "pc" : ["피시방",""],
    "alcohol" : ["술","FD6"]
}

/////// 샘플 데이터
let info={
    x : 126.9256873598537,
    y : 37.558486548510515,
    range : 1000
}
let data=["cafe","tour","shopping"];
//////////

class Process extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count : 0,
            output : []
        }
    }
    componentDidMount(){
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
            {this.state.count>0 ? this.state.output.map(value=><p>{value[0]["place_name"]}</p>) : <p> loading </p>}
        </div>
  }
}

export default Process;
