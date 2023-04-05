const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9oezb.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

connection();
