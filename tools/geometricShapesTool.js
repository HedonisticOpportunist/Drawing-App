function GeometricShapesTool() {
    this.icon = "assets/shapes.png", this.name = "Draw Shapes Tool", this.elements = document.getElementsByClassName("shape"), this.button = document.getElementById("shapes_btn"), this.scribble = new Scribble, this.drawRectangle = null, this.drawEllipse = null, this.drawTriangle = null, this.drawHeart = null, this.drawLine = null, this.startMouseX = -1, this.startMouseY = -1, this.drawing = !1, this.draw = function () {
        if (mouseIsPressed && null != drawingProperties.sliderValue) {
            for (let t = 0; t < this.elements.length; t++) this.elements[t].style.visibility = "visible";
            this.button.style.visibility = "visible", -1 == this.startMouseX ? (this.startMouseX = mouseX, this.startMouseY = mouseY, this.drawing = !0, loadPixels()) : (updatePixels(), stroke(getRandomValue()), strokeWeight(drawingProperties.sliderValue), this.drawRectangle = 0 != eventConditions.drawRectangleCondition ? this.scribble.scribbleRect(this.startMouseX, this.startMouseY, mouseX, mouseY) : this.drawRectangle, this.drawEllipse = 0 != eventConditions.drawEllipseCondition ? this.scribble.scribbleEllipse(this.startMouseX, this.startMouseY, mouseX, mouseY) : this.drawEllipse, this.drawTriangle = 0 != eventConditions.drawTriangleCondition ? tri(this.startMouseX, this.startMouseY, 50, 1) : this.drawTriangle, this.drawHeart = 0 != eventConditions.drawHeartCondition ? heart(this.startMouseX, this.startMouseY, 50, 1) : this.drawHeart, this.drawLine = 0 != eventConditions.drawLineCondition ? this.scribble.scribbleLine(this.startMouseX, this.startMouseY, mouseX, mouseY) : this.drawLine)
        } else this.drawing && (loadPixels(), this.drawing = !1, this.startMouseX = -1, this.startMouseY = -1)
    }, this.unselectTool = function () {
        updatePixels();
        for (let t = 0; t < this.elements.length; t++) this.elements[t].style.visibility = "hidden";
        this.button.style.visibility = "hidden"
    }
}
