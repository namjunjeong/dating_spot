import React,{useEffect} from "react";
import axios from 'axios';
var kakaokey="5819749ef21ee7d0aeff60d9a2178b99";

function dataprocess(props,tag,x_coor,y_coor,range){
    tag[0]=encodeURI(tag[0]);
    axios({
        url :`https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=9&sort=accuracy&x=${x_coor}&y=${y_coor}&radius=${range}&category_group_code=${tag[1]}&query=${tag[0]}`,
        method : "GET",
        headers : {Authorization: `KakaoAK ${kakaokey}`}
    }).then((response)=>{
        console.log("success");
        return response.data;
    }).catch((error)=>{
        console.log("error");
    })
}

class Process extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const category_list={ //need to append more
            "cafe" : ["카페","CE7"],//카페
            "restaurant" : ["음식점","FD6"],
            "tour" : ["관광명소","AT4"],
            "culture" : ["문화시설","CT1"],
            "theme" : ["테마카페","CE7"],
            "shopping" : ["의류판매",""],
            "pc" : ["피시방",""],
            "alcohol" : ["술","FD6"]
        }
        let data=["cafe","tour","shopping"];//sample input
        let info={//received from previous page
            x : 126.9256873598537,
            y : 37.558486548510515,
            range : 1000
        }
        let output={};
        data.forEach((tag,ind,array)=>{
            output.tag=dataprocess(this.props,category_list[tag],info.x,info.y,info.range);
        })
                
        return <div> process </div>
  }
}

export default Process;
