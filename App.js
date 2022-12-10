const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
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
app.get("/weather-app/api", (req, res) => {
  res.sendFile("C:/Users/callr/Weather-Web-App/public/index.html");
});
app.get("/weather-app/api/search", async (req, res) => {
  let { city } = req.query;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const url2 = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`;
  let dats = await Promise.all([
    fetch(url, options).then((re) => re.json()),
    fetch(url2, options2).then((re) => re.json()),
  ])
    .then((json) => res.send(json))
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log("listening on port", port);
});
