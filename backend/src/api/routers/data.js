import express from "express";
import axios from "axios";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

import config from "../../config/index.js";

const dataRoute = express.Router();

const category_keyword_code = {
  cafe: "카페",
  restaurant: "음식점",
  stroll: "관광명소",
  gallery: "문화시설",
  themeCafe: "테마카페",
  shopping: "쇼핑",
  pcroom: "피시방",
  drink: "술",
};

const category_group_code = {
  cafe: "CE7",
  restaurant: "FD6",
  stroll: "AT4",
  gallery: "CT1",
  themeCafe: "CE7",
  shopping: "",
  pcroom: "",
  drink: "",
};

const getDataFromUrl = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitForSelector(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span.bg_present"
  );

  const name = await page.$eval(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span.bg_present",
    (el) => el.textContent
  );
  console.log(name);

  const data = await page.content();
  await browser.close();

  const $ = cheerio.load(data);
  const res = $(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span.bg_present"
  ).html();

  console.log(res);
};

dataRoute.post("/", async (req, res) => {
  const x = req.body.x;
  const y = req.body.y;
  const keyword = category_keyword_code[req.body.catagory];
  const category = category_group_code[req.body.catagory];
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json`;

  let {
    data: { documents },
  } = await axios({
    method: "get",
    url: url,
    headers: {
      Authorization: `KakaoAK ${config.kakaokey}`,
    },
    params: {
      query: keyword,
      x: x,
      y: y,
      size: 10,
      radius: 1000,
      category_group_code: category,
    },
  });

  const output = {
    x: req.body.x,
    y: req.body.y,
  };

  documents = documents.map((data) => {
    const newData = {};
    newData["place_name"] = data["place_name"];
    newData["x"] = data["x"];
    newData["y"] = data["y"];
    newData["place_url"] = data["place_url"];
    newData["id"] = data["id"];
    return newData;
  });

  output["list"] = documents;

  // await getDataFromUrl([
  //   "http://place.map.kakao.com/1865345876",
  //   "http://place.map.kakao.com/12276247",
  //   "http://place.map.kakao.com/1280689916",
  // ]);
  await getDataFromUrl("https://place.map.kakao.com/1280689916");

  res.json(output).status(200);
});

export default dataRoute;
