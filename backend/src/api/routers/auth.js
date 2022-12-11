import express from "express";
import User from "../../models/user.js";

const authRoute = express.Router();

authRoute.post("/login", async (req, res) => {
  if (req.session.user) return res.send("이미 로그인 되었습니다");

  try {
    const user = await User.login(req.body.id, req.body.password);

    console.log(user);

    req.session.user = {
      email: user.email,
      username: user.username,
      authorized: true,
    };
  } catch (err) {
    console.error(err);
    return res.status(401).send("로그인 실패");
  }

  return res.send("로그인 성공");
});

authRoute.get("/logout", async (req, res) => {
  if (!req.session.user) return res.send("아직 로그인되지 않았습니다");
  req.session.destroy((err) => console.log("세션 삭제"));
  res.send("로그아웃");
});

authRoute.post("/guest", async (req, res) => {
  if (req.session.user) return res.send("이미 로그인 되었습니다");

  try {
    let user = await User.findOne({ email: "guest@example.com" });
    if (user === null) {
      user = await User.create({
        id: "guest",
        password: "guset",
        email: "guest@example.com",
        username: "guest",
      });
    }

    req.session.user = {
      email: user.email,
      authorized: true,
    };
  } catch (err) {
    console.error(err);
    return res.status(401).send("로그인 실패");
  }

  return res.send("로그인 성공");
});

export default authRoute;
