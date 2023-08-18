function calculateEllipseArea() {
  const major = getInputValue("ellipse-major");
  const minor = getInputValue("ellipse-minor");

  const area = 3.14 * major * minor;
  const areaTowDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaTowDecimal);
}
function getInputValue(inputId) {
  const inputFeild = document.getElementById(inputId);
  const inputValueText = inputFeild.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}
