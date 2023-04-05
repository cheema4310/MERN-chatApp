const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be empty"],
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
      validate: [isEmail, "invalid Email"],
      required: [true, "can't be blanked"],
    },
    password: {
      type: String,
      required: [true, "can't be empty"],
    },
    picture: {
      type: String,
    },
    newMessages: {
      type: Object,
      default: {},
    },
    status: {
      type: String,
      default: "online",
    },
  },
  { minimize: false }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next(); // password value initially would have been empty or null

  // Hashing the Password
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;

      next();
    });
  });
});

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();
  delete userObj.password;
  return userObj;
};

UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid Email");

  const isPasswordValid = bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid Credentials");
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
