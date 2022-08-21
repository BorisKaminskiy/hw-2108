const rangeRed = document.querySelector("#range-red");
const rangeGreen = document.querySelector("#range-green");
const rangeBlue = document.querySelector("#range-blue");
const rangeRedInfo = document.querySelector(".info-range-red");
const rangeGreenInfo = document.querySelector(".info-range-green");
const rangeBlueInfo = document.querySelector(".info-range-blue");
const dec = document.querySelector(".dec");
const hex = document.querySelector(".hex");
const colorWindow = document.querySelector(".color-window");

function componentToHex(arg) {
  let tempInt = Number(arg).toString(16);
  return tempInt.length === 1 ? "0" + tempInt : tempInt;
}

function values() {
  let decValue = `rgba(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value}, 1)`;

  let hexValue = `#${
    componentToHex(rangeRed.value) +
    componentToHex(rangeGreen.value) +
    componentToHex(rangeBlue.value)
  }`;
  let colorWindowValue = `rgba(${rangeRed.value}, ${rangeGreen.value}, ${rangeBlue.value}, 1)`;

  return (
    (rangeRedInfo.innerHTML = rangeRed.value),
    (rangeGreenInfo.innerHTML = rangeGreen.value),
    (rangeBlueInfo.innerHTML = rangeBlue.value),
    (dec.innerHTML = decValue),
    (hex.innerHTML = hexValue),
    (colorWindow.style.background = colorWindowValue)
  );
}

function redValue() {
  rangeRed.addEventListener("input", values);
}

function greenValue() {
  rangeGreen.addEventListener("input", values);
}

function blueValue() {
  rangeBlue.addEventListener("input", values);
}

function colorValue() {
  values();
  redValue();
  greenValue();
  blueValue();
}

export { colorValue };
