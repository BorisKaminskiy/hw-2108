const textArea = document.querySelector(".text-area");
const range = document.querySelector(".input-range");
const rangeInfo = document.querySelector(".input-range-info");
const checkboxNumber = document.querySelector("#number-checkbox");
const checkboxLowerLetter = document.querySelector("#lowletter-checkbox");
const checkboxUpperLetter = document.querySelector("#upletter-checkbox");
const checkboxSymbol = document.querySelector("#symbol-checkbox");
const generateButton = document.querySelector(".generate-button");

function startValue () {
  return rangeInfo.innerHTML = range.value;
}

function getPassword() {
  function passwordRange() {
    const nambersValues = "0123456789";
    const letterLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const letterUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!№;%:?*()_+=-";
    let tempString = nambersValues;

    if (checkboxLowerLetter.checked) {
      tempString = tempString + letterLowerCase;
    }
    if (checkboxUpperLetter.checked) {
      tempString = tempString + letterUpperCase;
    }
    if (checkboxSymbol.checked) {
      tempString = tempString + symbols;
    }

    return tempString;
  }

  let password = "";
  let rangeString = passwordRange();

  while (password.length < range.value) {
    password += rangeString[Math.floor(Math.random() * rangeString.length)];
  }

  return (textArea.innerHTML = password);
}

function passwordGenerator() {
  startValue();

  range.addEventListener("input", () => {
    rangeInfo.innerHTML = range.value;
  });

  generateButton.addEventListener("click", getPassword);
}

export { passwordGenerator };
