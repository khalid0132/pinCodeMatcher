function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin(); // recursive way (akta function er vitor arekta function call kora)
  }
}

// display Pin

function generatePin() {
  const pinInput = document.getElementById("randomPin");
  pinInput.value = getPin();
}

// button calculator
// const clickButton = document.getElementById("button-container");
// clickButton.addEventListener("click", function (event) {});
function buttonContainer(event) {
  const digit = event.target.innerText;

  //   console.log(typeInput.value);
  if (isNaN(digit)) {
    if (digit === "C") {
      const typeInput = document.getElementById("type-input");
      typeInput.value = "";
    }
    // console.log("Handle non digit");
  } else {
    const typeInput = document.getElementById("type-input");
    typeInput.value = typeInput.value + digit;
  }
}

// clear button

// onclick="clearButton()" use kore nicher function use kore o CLEAR ER kaj ta kora jae
// function clearButton() {
//   const typeInput = document.getElementById("type-input");
//   typeInput.value = "";
// }

// backspaceClear button  (Bujhte hobe)
// function backspaceClear() {
//   const typeInput = document.getElementById("type-input");
//   typeInput.value = typeInput.value - event.target.innerText;
// }

function compareValue() {
  const pinInput = document.getElementById("randomPin");
  const typeInput = document.getElementById("type-input");
  if (pinInput.value === typeInput.value) {
    // alert(document.getElementById("success").innerText);
    const successPin = document.getElementById("success");
    successPin.style.display = "block";
    const failPin = document.getElementById("fail");
    failPin.style.display = "none";
  } else {
    // alert(document.getElementById("fail").innerText);
    const failPin = document.getElementById("fail");
    failPin.style.display = "block";
    const successPin = document.getElementById("success");
    successPin.style.display = "none";
  }
}
