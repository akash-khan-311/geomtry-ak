function calculateTriangleArea() {
  // triangle base value
  const base = getInputValue("triangle-base");

  // Get triangle height value
  const height = getInputValue("triangle-height");

  const area = 0.5 * base * height;
  setElementInnerText("triangle-area", area);
}

function calculateRectangleArea() {
  //rectangle width
  const width = getInputValue("rectangle-width");
  // Get rectangle length
  const length = getInputValue("rectangle-length");
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
  // Calculate Perallelogram area
  const area = height * base;
  // Show Perallelogram area

  setElementInnerText("parallelogram-area", area);
}

