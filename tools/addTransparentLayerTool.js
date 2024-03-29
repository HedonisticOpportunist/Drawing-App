/*
TRANSPARENT LAYER TOOL FUNCTION
*/

function AddTransparentLayer() {
  this.icon = "assets/change_background.webp";
  this.name = "Add Transparent Layer Tool";

  /*
  ************************************
          
                  METHODS
          
  ************************************
  */
  this.draw = function () {
    loadPixels();
    if (mouseIsPressed) {
      /* set the blend mode to be the lightest and then
            make the fill to be the new input colour from the colour wheel */
      blendMode(LIGHTEST);
      fill(drawingProperties.colourInput);

      //draw a rectangle that is roughly the size of the canvas
      rect(0, 0, canvasContainer.size().width, canvasContainer.size().height);
    }

    loadPixels();
    push();
    pop();
  };

  /* reset the blend mode once the tool has been unselected */
  this.unselectTool = function () {
    updatePixels();
    blendMode(BLEND);
  };
}
