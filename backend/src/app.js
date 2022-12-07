import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import fileStore from "session-file-store";
import helmet from "helmet";
import mongoose from "mongoose";
import config from "./config/index.js";
import userRouter from "./api/routers/user.js";
import authRouter from "./api/routers/auth.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true,
    // store: new fileStore(),
    cookie: { maxAge: 1000 * 60 * 5 },
  })
);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use((req, res, next) => res.status(404).send("Not Found"));

app
  .listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  })
  .on("error", (err) => {
    console.error(err);
    process.exit(1);
  });

mongoose.set("strictQuery", false);
mongoose
  .connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB loaded and connected!"));
