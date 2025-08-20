function checkWeather() {
  const body = document.querySelector("body");
  const temp = document.querySelector("#myTemp");
  console.log(temp.value);
  const t = temp.value;
  console.log(t);
  if (t > 40) {
    console.log("It's too hot.");
    body.style.backgroundColor = "red";
  } else if (t <= 40 && t > 30) {
    console.log("It's warm.");
    body.style.backgroundColor = "pink";
  } else if (t <= 30 && t > 18) {
    console.log("It's pleasant.");
    body.style.backgroundColor = "green";
  } else if (t <= 18 && t > 8) {
    console.log("It's cold.");
    body.style.backgroundColor = "blue";
  } else if (t <= 8) {
    console.log("It's freezing.");
    body.style.backgroundColor = "gray";
  }
}
