let input = document.getElementById("input");
let calculateButton = document.getElementById("calculate");
let result = document.getElementById("result");

function evaluateExpression() {
  try {
    let expression = input.value;
    // Replace percentage values with their numeric equivalents
    let resultValue = math.evaluate(expression);
    result.textContent = "Result: " + resultValue;
  } catch (error) {
    result.textContent = "Error: Invalid Expression";
  }
}

calculateButton.addEventListener("click", evaluateExpression);

function clearInput() {
  input.value = "";
  result.textContent = "";
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearInput);

let buttons = document.querySelectorAll(".btn-primary:not(#calculate):not(.clear):not(.wow)");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    input.value += button.textContent;
  });
});

let equalButton = document.querySelector(".wow");
equalButton.addEventListener("click", evaluateExpression);

document.addEventListener("keydown", function (event) {
  if (
    (event.key >= "0" && event.key <= "9") ||
    event.key === "." ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "Enter" ||
    event.key === "NumpadEnter"
  ) {
    if (event.key === "Enter" || event.key === "NumpadEnter") {
      evaluateExpression();
    } else {
      input.value += event.key;
    }
    event.preventDefault(); // Prevents the default behavior of the keys
  } else if (event.key === "Escape" || event.key === "c") {
    clearInput();
    event.preventDefault();
  }
});
