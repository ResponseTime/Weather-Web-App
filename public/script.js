let x = document.getElementById("cit");
let btn = document.getElementById("sub");

btn.addEventListener("click", () => {
  fetch(`api/search?city=${x.value}`)
    .then((value) => value.json())
    .then((json) => {
      let weather = json[0];
      let air = json[1];
      console.log(weather, air);
    })
    .catch((err) => console.log(err));
});

fetch(`api/search?city=seattle`)
  .then((value) => value.json())
  .then((json) => {
    let weather = json[0];
    let air = json[1];
    let sea = document.getElementById("set");
    let arr = [
      "cloud_pct",
      "feels_like",
      "humidity",
      "max_temp",
      "min_temp",
      "sunrise",
      "sunset",
      "temp",
      "wind_degrees",
      "wind_speed",
    ];
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      td.innerText =
        arr[i] == "sunrise" || arr[i] == "sunset"
          ? new Date(weather[arr[i]] * 1000)
          : weather[arr[i]];
      sea.appendChild(td);
    }
  })
  .catch((err) => console.log(err));
fetch(`api/search?city=new york`)
  .then((value) => value.json())
  .then((json) => {
    let weather = json[0];
    let air = json[1];
    let sea = document.getElementById("neww");
    let arr = [
      "cloud_pct",
      "feels_like",
      "humidity",
      "max_temp",
      "min_temp",
      "sunrise",
      "sunset",
      "temp",
      "wind_degrees",
      "wind_speed",
    ];
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      td.innerText =
        arr[i] == "sunrise" || arr[i] == "sunset"
          ? new Date(weather[arr[i]] * 1000)
          : weather[arr[i]];

      sea.appendChild(td);
    }
  })
  .catch((err) => console.log(err));
fetch(`api/search?city=raipur`)
  .then((value) => value.json())
  .then((json) => {
    let weather = json[0];
    let air = json[1];
    let sea = document.getElementById("rai");
    let arr = [
      "cloud_pct",
      "feels_like",
      "humidity",
      "max_temp",
      "min_temp",
      "sunrise",
      "sunset",
      "temp",
      "wind_degrees",
      "wind_speed",
    ];
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      td.innerText =
        arr[i] == "sunrise" || arr[i] == "sunset"
          ? new Date(weather[arr[i]] * 1000)
          : weather[arr[i]];
      sea.appendChild(td);
    }
  })
  .catch((err) => console.log(err));
fetch(`api/search?city=delhi`)
  .then((value) => value.json())
  .then((json) => {
    let weather = json[0];
    let air = json[1];
    let sea = document.getElementById("del");
    let arr = [
      "cloud_pct",
      "feels_like",
      "humidity",
      "max_temp",
      "min_temp",
      "sunrise",
      "sunset",
      "temp",
      "wind_degrees",
      "wind_speed",
    ];
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      td.innerText =
        arr[i] == "sunrise" || arr[i] == "sunset"
          ? new Date(weather[arr[i]] * 1000)
          : weather[arr[i]];

      sea.appendChild(td);
    }
  })
  .catch((err) => console.log(err));
fetch(`api/search?city=amritsar`)
  .then((value) => value.json())
  .then((json) => {
    let weather = json[0];
    let air = json[1];
    let sea = document.getElementById("ami");
    let arr = [
      "cloud_pct",
      "feels_like",
      "humidity",
      "max_temp",
      "min_temp",
      "sunrise",
      "sunset",
      "temp",
      "wind_degrees",
      "wind_speed",
    ];
    for (let i = 0; i < 10; i++) {
      let td = document.createElement("td");
      td.innerText =
        arr[i] == "sunrise" || arr[i] == "sunset"
          ? new Date(weather[arr[i]] * 1000)
          : weather[arr[i]];

      sea.appendChild(td);
    }
  })
  .catch((err) => console.log(err));
