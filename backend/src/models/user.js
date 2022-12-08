import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    match: /.+\@.+\..+/,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    trim: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: Date,
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.statics.login = async function (id, password) {
  const user = await this.findOne({ id });

  if (!user) throw Error("아이디가 올바르지 않습니다!");

  const auth = await bcrypt.compare(password, user.password);

  if (!auth) throw Error("비밀번호가 올바르지 않습니다!");

  return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
