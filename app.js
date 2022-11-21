var express=require('express');
var app=express();
var search=require("./search")
var bodyParser=require('body-parser');
var requestIp=require("request-ip");
var fs=require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res)=>{
    var userip=requestIp.getClientIp(req);
    fs.writeFile('./ip',userip+'\n',{flag:'a+'},err=>{
        if(err){
            console.error(err)
            return
        }
    })
    res.render('app');
})

app.post('/',(req,res)=>{
    res.redirect('./search');
})
app.use('/search',search);


var server=app.listen(3000,'0.0.0.0');