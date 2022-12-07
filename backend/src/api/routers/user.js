import express from "express";
import User from "../../models/user.js";

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  if (!req.session.user) return res.send("로그인 해주세요").status(200);
  const user = await User.findOne({ id: req.session.user.id });
  return res.json(user).status(200);
});

userRoute.post("/", async (req, res) => {
  try {
    await User.create({
      id: req.body.id,
      password: req.body.password,
      email: req.body.email,
      username: req.body.username,
    });
    return res.send("회원가입 성공").status(201);
  } catch (error) {
    console.log(error);
    return res.send("회원가입 실패").status(400);
  }
});

userRoute.delete("/", async (req, res) => {
  if (!req.session.user) return res.send("로그인 해주세요").status(200);
  await User.deleteOne({ id: req.session.user.id });
  req.session.destroy((err) => console.log("세션 삭제"));
  return res.send("탈퇴 성공").status(200);
});

export default userRoute;
