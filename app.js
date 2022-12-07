var express=require('express');
var app=express();
var api=require("./api");
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("main");
})
app.use('/api',api);


var server=app.listen(3500);