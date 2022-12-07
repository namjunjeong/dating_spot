var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var puppeteer=require('puppeteer');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();


router.get('/',(req,res)=>{
    (async()=>{
        const browser=await puppeteer.launch();
        const page=await browser.newPage();
        await page.goto(req.query.link);
        const content = await page.content();
        console.log(content);
        res.send(content);
    })();
})

module.exports=router;

