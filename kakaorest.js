/*
kakao map REST API를 테스트하기 위한 코드
query에 인코딩된 검색 요소를 담아서 GET request한다
size,거리,검색중심좌표,검색 제한범위를 담아서 requeset 할 수 있다
중심좌표는 REST API에서 제공하는 주소 검색을 이용해서 받아올 수 있다
*/

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var request=require('request')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();

/*
app.set('view engine', 'ejs');
app.set('views', './views');
*/
const kakaokey="본인 REST API key 입력"//kakao developers에서 본인 rest api key를 입력

router.get('/',function (req,res){
    search=encodeURI("데이트");//검색 쿼리 예시는 데이트. 나중에는 받아오는 형식으로 수정할것
    const options={//https://developers.kakao.com/tool/rest-api/open/get/v2-local-search-keyword.%7Bformat%7D 참조
        uri:`https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&query=${search}`,
        method:"GET",
        headers: {Authorization: `KakaoAK ${kakaokey}`}
    }
    request(options,function(err,response,body){
        if(err){
            res.send("error occured");
        }else{
            body=JSON.parse(body);//body는 string형태이므로 JSON.parse한다. parse된 데이터는 dictionary
            data=body["documents"];//document key 안에 데이터가 들어있다
            res.send(data[0]);
        }
    })
})

module.exports=router;
