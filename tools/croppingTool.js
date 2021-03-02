/*
CROPPING TOOL
*/

function CroppingTool() {

    this.icon = "assets/scissors.png";
    this.name = "Cropping Tool";
    this.button = document.getElementById("cut_btn");

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

            //make the cut button visible
            this.button.style.visibility = 'visible';

            if (this.startMouseX == -1) {

                this.startMouseX = mouseX;
                this.startMouseY = mouseY;
                this.drawing = true;
                loadPixels();

            } else {
                if (eventConditions.cutBtnSelected) {
                    updatePixels();

                    /*
                    setting the cutting tool 'erased area' 
                    be the same as the background colour 
                    */
                    if (drawingProperties.backgroundColour == "#fff3e2") {
                        noStroke();
                        //the fill for the cut area is white 
                        fill("#fff3e2");
                    }
                    strokeWeight(drawingProperties.sliderValue);
                    rect(this.startMouseX, this.startMouseY, mouseX, mouseY);
                }
            }
        } else if (this.drawing) {

            loadPixels();
            this.drawing = false;
            this.startMouseX = -1;
            this.startMouseY = -1;
        }

    };

    this.unselectTool = function () {
        updatePixels();
        /*make the cut button's visibility hidden once the tool
        has been unselected */
        this.button.style.visibility = 'hidden';
    };
}
