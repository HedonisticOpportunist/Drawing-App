/*
SPRAY CAN TOOL FUNCTION
*/

function SprayCanTool() {
  this.icon = "assets/spray_can.webp";
  this.name = "Spray Can Tool";

  this.points = drawingProperties.sliderValue;
  this.spread = drawingProperties.sliderValue + 10;

  /*
  ************************************
          
            METHODS
          
  ************************************
  */
  this.draw = function () {
    if (mouseIsPressed && drawingProperties.sliderValue != null) {
      for (let i = 0; i < this.points; i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  };
}
