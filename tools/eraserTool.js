function EraserTool() {
    this.icon = "assets/eraser.png", this.name = "Eraser Tool", this.startMouseX = -1, this.startMouseY = -1, this.draw = function () {
        mouseIsPressed && null != drawingProperties.sliderValue ? (-1 == this.startMouseX || ("#fff3e2" == drawingProperties.backgroundColour && stroke(drawingProperties.backgroundColour), strokeWeight(drawingProperties.sliderValue), line(this.startMouseX, this.startMouseY, mouseX, mouseY)), this.startMouseX = mouseX, this.startMouseY = mouseY) : (this.startMouseX = -1, this.startMouseY = -1)
    }
}
