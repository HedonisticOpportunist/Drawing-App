/*
GEOMETRIC SHAPES TOOL FUNCTION
*/

function GeometricShapesTool() {
  this.icon = "assets/shapes.png";
  this.name = "Draw Shapes Tool";

  this.elements = document.getElementsByClassName("shape");
  this.button = document.getElementById("shapes_btn");
  this.scribble = new Scribble();

  this.drawRectangle = null;
  this.drawEllipse = null;
  this.drawTriangle = null;
  this.drawHeart = null;
  this.drawLine = null;

  this.startMouseX = -1;
  this.startMouseY = -1;
  this.drawing = false;

  /*
    ************************************
         
        METHODS
         
    ************************************
    */
  this.draw = function () {
    if (mouseIsPressed && drawingProperties.sliderValue != null) {
      //make the shape images visible
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.visibility = "visible";
      }

      //make the shape button visible
      this.button.style.visibility = "visible";

      if (this.startMouseX == -1) {
        this.startMouseX = mouseX;
        this.startMouseY = mouseY;
        this.drawing = true;
        loadPixels();
      } else {
        updatePixels();

        //set the fill, stroke and stroke weight
        stroke(getRandomValue());
        strokeWeight(drawingProperties.sliderValue);

        this.drawRectangle =
          eventConditions.drawRectangleCondition != false
            ? this.scribble.scribbleRect(
                this.startMouseX,
                this.startMouseY,
                mouseX,
                mouseY
              )
            : this.drawRectangle;

        this.drawEllipse =
          eventConditions.drawEllipseCondition != false
            ? this.scribble.scribbleEllipse(
                this.startMouseX,
                this.startMouseY,
                mouseX,
                mouseY
              )
            : this.drawEllipse;

        this.drawTriangle =
          eventConditions.drawTriangleCondition != false
            ? tri(this.startMouseX, this.startMouseY, 50, 1)
            : this.drawTriangle;

        this.drawHeart =
          eventConditions.drawHeartCondition != false
            ? heart(this.startMouseX, this.startMouseY, 50, 1)
            : this.drawHeart;

        this.drawLine =
          eventConditions.drawLineCondition != false
            ? this.scribble.scribbleLine(
                this.startMouseX,
                this.startMouseY,
                mouseX,
                mouseY
              )
            : this.drawLine;
      }
    } else if (this.drawing) {
      loadPixels();
      this.drawing = false;
      this.startMouseX = -1;
      this.startMouseY = -1;
    }
  };

  /* reset the shape images' visibility to be hidden once the tool
        has been unselected */
  this.unselectTool = function () {
    updatePixels();

    for (let j = 0; j < this.elements.length; j++) {
      this.elements[j].style.visibility = "hidden";
    }

    //make the shapes button hidden
    this.button.style.visibility = "hidden";
  };
}
