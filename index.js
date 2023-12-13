const express = require("express");
const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const CalenderRoute = require("./controller/calender");

dotenv.config();
const app = express();

const ConnectDb = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => console.log("db connection error"));
};
app.use(express.json());
app.use(cors());

app.use("/api/calender", CalenderRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  ConnectDb();
  console.log(`Sever listening to ${PORT}`);
});
