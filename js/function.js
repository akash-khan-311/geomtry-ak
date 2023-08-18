
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
