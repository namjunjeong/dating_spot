/*
kakao map REST API를 테스트하기 위한 코드
query에 인코딩된 검색 요소를 담아서 GET request한다
size,거리,검색중심좌표,검색 제한범위를 담아서 requeset 할 수 있다
중심좌표는 REST API에서 제공하는 주소 검색을 이용해서 받아올 수 있다
*/

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var axios=require("axios");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();


const kakaokey="5819749ef21ee7d0aeff60d9a2178b99"//kakao developers에서 본인 rest api key를 입력

router.get('/',function (req,res){
    res.render("search");
})

router.post('/',function(req,res){
    var search=encodeURI(req.body.query);
    axios({//https://developers.kakao.com/tool/rest-api/open/get/v2-local-search-keyword.%7Bformat%7D 참조
        url:`https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&query=${search}`,
        method:"get",
        headers: {Authorization: `KakaoAK ${kakaokey}`}
    }).then((response)=>{
        data=response.data["documents"];
        var resstring="";
        for(const item of data){
            for (const key in item){
                resstring+=`${key} : ${item[key]}<br>`;
            }
            resstring+="<br><br>";
        }
        res.send(resstring);
    }).catch((error)=>{
        res.send("error occured");
    })
})

module.exports=router;
