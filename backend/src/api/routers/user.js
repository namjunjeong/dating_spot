import express from "express";
import User from "../../models/user.js";

const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  const user = await User.find();
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
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default userRoute;
