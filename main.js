//button event
document
  .querySelector("#farenToCelButton")
  .addEventListener("click", buttonClick);

let mainBody = document.querySelector("body");

function buttonClick() {
  let getUserInfo = document.querySelector("#farenToCel").value;
  //   console.log(getUserInfo);
  let farenToCelMath = ((getUserInfo - 32) * 5) / 9;
  console.log(farenToCelMath.toPrecision(3));
  document.querySelector("#farenToCelDisplay").innerText =
    farenToCelMath.toFixed(1);
  document.querySelector("#reset1").reset();
  if (getUserInfo <= 32) {
    mainBody.style.backgroundColor = "blue";
  } else if (getUserInfo <= 60) {
    mainBody.style.backgroundColor = "yellow";
  } else if (getUserInfo <= 85) {
    mainBody.style.backgroundColor = "orange";
  } else if (getUserInfo <= 100) {
    mainBody.style.backgroundColor = "darkgoldenrod";
  } else {
    mainBody.style.backgroundColor = "red";
  }
}

document
  .querySelector("#celToFarenButton")
  .addEventListener("click", celToFClick);

function celToFClick() {
  let UserInfo = document.querySelector("#celToFaren").value;
  //   console.log(UserInfo);
  let celToFarenMath = UserInfo * 1.8 + 32;
  console.log(celToFarenMath);
  document.querySelector("#celToFarenDisplay").innerText =
    celToFarenMath.toFixed(1);
  document.querySelector("#reset2").reset();
  if (UserInfo <= 0) {
    mainBody.style.backgroundColor = "blue";
  } else if (UserInfo <= 15.6) {
    mainBody.style.backgroundColor = "yellow";
  } else if (UserInfo <= 2.4) {
    mainBody.style.backgroundColor = "orange";
  } else if (UserInfo <= 37.8) {
    mainBody.style.backgroundColor = "darkgoldenrod";
  } else {
    mainBody.style.backgroundColor = "red";
  }
}
