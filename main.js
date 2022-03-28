//button event
document
  .querySelector("#farenToCelButton")
  .addEventListener("click", buttonClick);

function buttonClick() {
  let getUserInfo = document.querySelector("#farenToCel").value;
  //   console.log(getUserInfo);
  let farenToCelMath = ((getUserInfo - 32) * 5) / 9;
  console.log(farenToCelMath.toPrecision(3));
  document.querySelector("#farenToCelDisplay").innerText =
    farenToCelMath.toFixed(1);
  document.querySelector("#reset1").reset();
}

document
  .querySelector("#celToFarenButton")
  .addEventListener("click", celToFClick);

function celToFClick() {
  let getUserInfo = document.querySelector("#celToFaren").value;
  //   console.log(getUserInfo);
  let celToFarenMath = getUserInfo * 1.8 + 32;
  console.log(celToFarenMath);
  document.querySelector("#celToFarenDisplay").innerText =
    celToFarenMath.toFixed(1);
  document.querySelector("#reset2").reset();
}
