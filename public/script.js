let x = document.getElementById("cit");
let btn = document.getElementById("sub");
btn.addEventListener("click", () => {
  fetch(`api/search?city=${x.value}`)
    .then((value) => value.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
});
