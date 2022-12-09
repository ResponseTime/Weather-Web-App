const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 5000;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7f77a966fcmsha025da6e15b104dp127106jsn46a613e82427",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
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
