const express = require("express");
const fetch = require("node-fetch");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.HOST,
  },
};
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": process.env.AIR_HOST,
  },
};

app.get("/api/search", (req, res) => {
  let { city } = req.query;
  let { country } = req.query;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const url2 = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}&country=${country}`;
  if (city) {
    fetch(url, options)
      .then((re) => re.json())
      .then((json) => res.json(json))
      .catch((err) => console.error(err));
  } else if (city && country) {
    fetch(url2, options2)
      .then((re) => re.json())
      .then((json) => res.json(json))
      .catch((err) => console.error(err));
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
