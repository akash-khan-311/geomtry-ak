function calculateTriangleArea() {
  // triangle base value
  const base = getInputValue("triangle-base");

  // Get triangle height value
  const height = getInputValue("triangle-height");
  // Validate The Function
  if (typeof base !== "number" || typeof height !== "number") {
    alert("Please Type a valid number");
    return;
  } else if (isNaN(base) || isNaN(height)) {
    alert("Invalid Input");
    return;
  }
  // Calculate triangle area
  const area = 0.5 * base * height;
  setElementInnerText("triangle-area", area);
}

function calculateRectangleArea() {
  //rectangle width
  const width = getInputValue("rectangle-width");
  // Get rectangle length
  const length = getInputValue("rectangle-length");
  // Validate The Function
  if (typeof base !== "number" || typeof height !== "number") {
    alert("Please Type a valid number");
    return;
  } else if (isNaN(base) || isNaN(height)) {
    alert("Invalid Input");

    return;
  }
  // Calculate rectangle area
  const area = width * length;
  // show rectangle area
  setElementInnerText("rectangle-area", area);
}

//
function calculateParallelogramArea() {
  // Perallelogram base
  const base = getInputValue("parallelogram-base");
  // Perallelogram height
  const height = getInputValue("parallelogram-height");
  // Validate The Function
  if (typeof base !== "number" || typeof height !== "number") {
    alert("Please Type a valid number");
    return;
  } else if (isNaN(base) || isNaN(height)) {
    alert("Invalid Input");
    return;
  }
  // Calculate Perallelogram area
  const area = height * base;
  // Show Perallelogram area

  setElementInnerText("parallelogram-area", area);
}
function calculateEllipseArea() {
  const major = getInputValue("ellipse-major");
  const minor = getInputValue("ellipse-minor");
  // Validate The Function
  if (typeof base !== "number" || typeof height !== "number") {
    alert("Please Type a valid number");
    return;
  } else if (isNaN(base) || isNaN(height)) {
    alert("Invalid Input");
    return;
  }
  const area = 3.14 * major * minor;
  const areaTowDecimal = area.toFixed(2);
  setElementInnerText("ellipse-area", areaTowDecimal);
}
