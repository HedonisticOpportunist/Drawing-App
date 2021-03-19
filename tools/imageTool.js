/*
IMAGE TOOL FUNCTION
*/

function ImageTool() {
  this.icon = "assets/cat_image.webp";
  this.name = "Image Tool";
  this.elements = document.querySelectorAll("[class = 'cat']");

  /*
  ************************************
          
              METHODS
          
  ************************************
  */
  this.draw = function () {
    loadPixels();

    if (mouseIsPressed && drawingProperties.sliderValue != null) {
      //make the cat image elements visible
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.visibility = "visible";
      }

      /* display one of the images 
            once a click event has been registered */
      this.displayedImage = eventConditions.imgClicked
        ? image(eventConditions.clickedImage, mouseX, mouseY, 100, 100)
        : this.displayedImage;
    }

    loadPixels();
    push();
    pop();
  };

  /* reset the cat images' style visibility to be hidden once the tool
          has been unselected */
  this.unselectTool = function () {
    updatePixels();

    for (let j = 0; j < this.elements.length; j++) {
      this.elements[j].style.visibility = "hidden";
    }
  };
}
