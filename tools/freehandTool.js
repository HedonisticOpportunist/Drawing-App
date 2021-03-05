/*
FREE HAND TOOL FUNCTION
*/

function FreehandTool() {
        this.icon = "assets/pencil.png";
        this.name = "Free Hand Tool";

        this.previousMouseX = -1;
        this.previousMouseY = -1;

    /*
    ************************************
          
            METHODS
          
    ************************************
    */
    this.draw = function () {
        if (mouseIsPressed) {
            if (this.previousMouseX == -1) {
                this.previousMouseX = mouseX;
                this.previousMouseY = mouseY;
            } else {
                line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
                this.previousMouseX = mouseX;
                this.previousMouseY = mouseY;
            }
        } else {
            this.previousMouseX = -1;
            this.previousMouseY = -1;
        }
    };
}
