/*
3D TOOL FUNCTION
*/

function ThreeDimensionalTool() {
  this.icon = "assets/3d.png";
  this.name = "3D Tool";

  this.elements = document.getElementsByClassName("threedim");
  this.graphics;

  this.frames;
  this.lowerBound = 200;
  this.upperBound = 800;

  this.cone = null;
  this.sphere = null;

  this.image;

  /*
      ************************************
      
              METHODS
      
      ************************************
    */
  this.draw = function () {
    if (mouseIsPressed) {
      //make the 3D-related images visible
      for (let i = 0; i < this.elements.length; i++) {
        this.elements[i].style.visibility = "visible";
      }

      //set the frame count
      this.frames = frameCount;

      //make the 3D drawing dependent on the frame count
      //in order to avoid memory leaks
      if (this.frames > this.lowerBound && this.frames < this.upperBound) {
        this.graphics = drawingProperties.startHelper.setUp3DCanvas(
          canvasContainer
        );
        //change the background depending on the colour palette value
        this.graphics.background(drawingProperties.colourInput);

        //rotation
        this.graphics.rotateZ(frameCount * 0.01);
        this.graphics.rotateX(frameCount * 0.01);
        this.graphics.rotateY(frameCount * 0.01);

        //add texture of haunting ghost
        this.graphics.texture(imageProperties.non_sequence_animations[1]);

        this.sphere =
          eventConditions.drawSphereCondition != false
            ? this.graphics.sphere(70)
            : this.sphere;

        this.cone =
          eventConditions.drawConeCondition != false
            ? this.graphics.cone(70, 30)
            : this.cone;

        if (this.graphics != null || this.graphics != undefined) {
          //draw image
          this.image = image(this.graphics, mouseX, mouseY);
        }

        loadPixels();
        push();
        pop();

        //clear the console
        console.clear();
      }

      if (this.frames > this.upperBound) {
        /*Message that informs the user that frame rate has been exhausted*/
        clear();
        noStroke();
        fill(0);
        textFont("Helvetica");
        textSize(18);
        text(
          "You've exhausted the amount of frames allowed to run for new 3D drawings." +
            "\n" +
            "Please re-load the application if you want to create a new 3D drawing." +
            "\n" +
            "Just make sure to save your previous changes.",
          100,
          200
        );
      }
    }
  };

  /* reset the 3D-related images' style visibility to be hidden once the tool
      has been unselected */
  this.unselectTool = function () {
    updatePixels();

    for (let j = 0; j < this.elements.length; j++) {
      this.elements[j].style.visibility = "hidden";
    }

    //restore canvas to its original height and width
    let canvas = createCanvas(
      canvasContainer.size().width,
      canvasContainer.size().height
    );
    background(drawingProperties.backgroundColour);
    canvas.parent("content");

    //restore the image to fit within this new canvas
    if (this.graphics != null || this.graphics != undefined) {
      image(this.graphics, mouseX, mouseY);
    }
  };
}
