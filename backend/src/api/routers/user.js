import express from "express";
import User from "../../models/user.js";

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  if (!req.session.user) return res.send("로그인 해주세요");
  console.log(req.session.user);
  const user = await User.findOne({
    email: req.session.user.email,
  });
  return res.json(user);
});

userRoute.post("/", async (req, res) => {
  try {
    if (req.body.email === "guest@example.com")
      return res.status(401).send("다른 email을 입력해주세요");
    await User.create({
      id: req.body.id,
      password: req.body.password,
      email: req.body.email,
      username: req.body.username,
    });
    return res.status(201).send("회원가입 성공");
  } catch (error) {
    console.log(error);
    return res.status(400).send("회원가입 실패");
  }
});

userRoute.delete("/", async (req, res) => {
  if (!req.session.user) return res.send("로그인 해주세요");
  await User.deleteOne({ email: req.session.user.email });
  req.session.destroy((err) => console.log("세션 삭제"));
  return res.send("탈퇴 성공");
});

export default userRoute;
