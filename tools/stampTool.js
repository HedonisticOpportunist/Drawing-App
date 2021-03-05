/*
STAMP TOOL
*/

class StampTool {
  constructor() {
    this.icon = "assets/stamp.png";
    this.name = "Stamp Tool";
    this.size = null;
    this.elements = document.querySelectorAll("[class = 'stamp']");
    this.displayedStamp = null;

    /*
    ************************************
        
            METHODS
        
    ************************************ 
    */
    this.draw = function () {
      if (mouseIsPressed && drawingProperties.sliderValue != null) {
        //make the paw image elements visible
        for (let i = 0; i < this.elements.length; i++) {
          this.elements[i].style.visibility = "visible";
        }

        let mousePosX = mouseX;
        let mousePosY = mouseY;

        /*make sure that if the slider is clicked that button does not go
        above a certain value*/
        mousePosY = mousePosY < -21 ? 50 : mouseY;

        //variable required to set the size of the stamp
        this.size = drawingProperties.sliderValue;

        /*draw one of the clicked upon images if a mouse click has been registered*/
        this.displayedStamp = eventConditions.imgClicked
          ? image(
              eventConditions.clickedImage,
              mousePosX,
              mousePosY,
              this.size,
              this.size
            )
          : this.displayedStamp;
      }

      loadPixels();
      push();
      pop();
    };

    /* reset the paws-related images' style visibility to be hidden once the tool
        has been unselected */
    this.unselectTool = function () {
      updatePixels();

      for (let j = 0; j < this.elements.length; j++) {
        this.elements[j].style.visibility = "hidden";
      }
    };
  }
}

export { StampTool };
