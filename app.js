var express=require('express');
var app=express();
var kakaorest=require("./kakaorest")
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("main");
})

app.use('/rest',kakaorest);


var server=app.listen(3000);