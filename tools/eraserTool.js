/*
ERASER TOOL FUNCTION
*/

function EraserTool() {
        this.icon = "assets/eraser.png";
        this.name = "Eraser Tool";

        this.startMouseX = -1;
        this.startMouseY = -1;

    /*
    ************************************
            
                    METHODS
            
    ************************************
    */
    this.draw = function () {
        if (mouseIsPressed && drawingProperties.sliderValue != null) {
            if (this.startMouseX == -1) {
                this.startMouseX = mouseX;
                this.startMouseY = mouseY;
            } else {
                /*setting the eraser tool removed area to be
                            the same as the background colour */
                if (drawingProperties.backgroundColour == "#fff3e2") {
                    stroke(drawingProperties.backgroundColour);
                }
                strokeWeight(drawingProperties.sliderValue);
                line(this.startMouseX, this.startMouseY, mouseX, mouseY);
                this.startMouseX = mouseX;
                this.startMouseY = mouseY;
            }
        } else {
            this.startMouseX = -1;
            this.startMouseY = -1;
        }
    };
}
