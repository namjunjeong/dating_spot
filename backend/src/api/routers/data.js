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
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  await page.waitForSelector(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span"
  );

  const data = await page.content();
  await browser.close();

  const $ = cheerio.load(data);
  const image_url = $(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.details_present > a > span.bg_present"
  ).attr("style");

  if (image_url !== undefined) image_url = image_url.match(/url\('(.*?)'/)[1];

  const rate = $(
    "#mArticle > div.cont_essential > div:nth-child(1) > div.place_details > div > div > a:nth-child(3) > span.color_b"
  ).text();

  return [image_url, rate.slice(0, -1)];
};

dataRoute.post("/", async (req, res) => {
  console.log(res.body);
  const x = req.body.x;
  const y = req.body.y;
  const keyword = category_keyword_code[req.body.catagory];
  const category = category_group_code[req.body.catagory];
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json`;

  try {
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

    const data = {
      x: parseFloat(req.body.x),
      y: parseFloat(req.body.y),
    };

    const list = [];

    const promises = documents.map(async (data) => {
      const [url, rate] = await getDataFromUrl(data["place_url"]);

      const newData = {};
      newData["place_name"] = data["place_name"];
      newData["x"] = parseFloat(data["x"]);
      newData["y"] = parseFloat(data["y"]);
      newData["place_url"] = data["place_url"];
      newData["id"] = parseInt(data["id"]);
      newData["picture_url"] = url;
      newData["rate"] = parseInt(rate);

      list.push(newData);
    });

    await Promise.all(promises);

    data["list"] = list;

    return res.json(data).status(200);
  } catch (err) {
    return res.json(err);
  }
});

export default dataRoute;
