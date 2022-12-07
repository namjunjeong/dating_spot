import express from "express";
import User from "../../models/user.js";

const authRoute = express.Router();

authRoute.post("/login", async (req, res) => {
  if (req.session.user) return res.send("이미 로그인 되었습니다").status(200);

  try {
    const user = await User.login(req.body.id, req.body.password);

    console.log(user);

    req.session.user = {
      id: user.id,
      name: user.username,
      authorized: true,
    };
  } catch (err) {
    console.error(err);
    return res.send("로그인 실패").status(401);
  }

  return res.send("로그인 성공").status(200);
});

authRoute.get("/logout", async (req, res) => {
  if (!req.session.user)
    return res.send("아직 로그인되지 않았습니다").status(200);
  req.session.destroy((err) => console.log("세션 삭제"));
  res.send("로그아웃").status(200);
});

export default authRoute;
