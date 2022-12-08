import express from "express";
import Spot from "../../models/spot.js";

const spotRoute = express.Router();

spotRoute.get("/", async (req, res) => {
  if (!req.session.user) return res.send("아직 로그인되지 않았습니다");
  try {
    const spot = await Spot.find();
    return res.json(spot);
  } catch (err) {
    console.log(err);
    return res.status(500).send("서버 읽기 에러");
  }
});

spotRoute.post("/", async (req, res) => {
  if (!req.session.user) return res.send("아직 로그인되지 않았습니다");
  const spot = { email: req.session.user.email, ...req.body };
  try {
    await Spot.create(spot);
  } catch (err) {
    console.log(err);
    return res.status(500).send("저장 에러");
  }
  res.sendStatus(201);
});

export default spotRoute;
