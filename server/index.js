require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Survey=require('./survey')
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.mongodb_key,
  () => {
    console.log("mongodb connected");
  },
  (e) => console.log("mongoose not connected")
);

app.post("/survey", (req, res) => {
  const name = req.body.name;
  const country = req.body.country;
  const email = req.body.email;
  const ratings = req.body.ratings.slice(0, 9);
    const survey=new Survey({name:name,country:country,email:email,ratings:ratings})
    survey.save().then(()=>res.send('survey saved')).catch(e=>console.log(e))
  
});
app.listen(4000, () => {
  console.log(`listening on port 4000`);
});
