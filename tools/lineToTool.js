function LineToTool() {
    this.icon = "assets/draw_line.png", this.name = "Draw Line Tool", this.startMouseX = -1, this.startMouseY = -1, this.drawing = !1, this.draw = function () {
        mouseIsPressed ? -1 == this.startMouseX ? (this.startMouseX = mouseX, this.startMouseY = mouseY, this.drawing = !0, loadPixels()) : (updatePixels(), line(this.startMouseX, this.startMouseY, mouseX, mouseY)) : this.drawing && (loadPixels(), this.drawing = !1, this.startMouseX = -1, this.startMouseY = -1)
    }
}
