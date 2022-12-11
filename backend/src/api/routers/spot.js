import express from "express";
import Spot from "../../models/spot.js";

const spotRoute = express.Router();

spotRoute.get("/", async (req, res) => {
  try {
    const spot = await Spot.find();
    return res.json(spot);
  } catch (err) {
    console.log(err);
    return res.status(500).send("서버 읽기 에러");
  }
});

spotRoute.post("/", async (req, res) => {
  const spot = { email: "guest@example.com", ...req.body };
  try {
    await Spot.create(spot);
    return res.status(201).send("스팟 추가 성공");
  } catch (err) {
    console.log(err);
    return res.status(500).send("저장 에러");
  }
});

export default spotRoute;
