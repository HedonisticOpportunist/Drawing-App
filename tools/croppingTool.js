function CroppingTool() {
    this.icon = "assets/scissors.png", this.name = "Cropping Tool", this.button = document.getElementById("cut_btn"), this.startMouseX = -1, this.startMouseY = -1, this.drawing = !1, this.draw = function () {
        mouseIsPressed && null != drawingProperties.sliderValue ? (this.button.style.visibility = "visible", -1 == this.startMouseX ? (this.startMouseX = mouseX, this.startMouseY = mouseY, this.drawing = !0, loadPixels()) : eventConditions.cutBtnSelected && (updatePixels(), "#fff3e2" == drawingProperties.backgroundColour && (noStroke(), fill("#fff3e2")), strokeWeight(drawingProperties.sliderValue), rect(this.startMouseX, this.startMouseY, mouseX, mouseY))) : this.drawing && (loadPixels(), this.drawing = !1, this.startMouseX = -1, this.startMouseY = -1)
    }, this.unselectTool = function () {
        updatePixels(), this.button.style.visibility = "hidden"
    }
}
