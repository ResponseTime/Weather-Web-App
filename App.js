const express = require("express");
const fetch = require("node-fetch");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.HOST,
  },
};

app.get("/api/search", (req, res) => {
  let { city } = req.query;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.json(json))
    .catch((err) => console.error("error:" + err));
});

app.listen(port, () => {
  console.log("listening on port", port);
});
