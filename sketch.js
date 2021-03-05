/*
Entry/Gateway script 
*/

import * as StartHelpers from StartHelpers

function preload() {
  drawingProperties.StartHelpers = new StartHelpers();
  drawingProperties.StartHelpers.preloadImages();
}

function setup() {
  drawingProperties.StartHelpers.setupTools();

  //clear any unnecessary warnings
  console.clear();
}

/*
the draw function
*/
function draw() {
  let toolbox = drawingProperties.StartHelpers.getToolBox();

  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("It looks like you haven't got a draw function!");
  }
}
