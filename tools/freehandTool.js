function FreehandTool() {
    this.icon = "assets/pencil.png", this.name = "Free Hand Tool", this.previousMouseX = -1, this.previousMouseY = -1, this.draw = function () {
        mouseIsPressed ? (-1 == this.previousMouseX || line(this.previousMouseX, this.previousMouseY, mouseX, mouseY), this.previousMouseX = mouseX, this.previousMouseY = mouseY) : (this.previousMouseX = -1, this.previousMouseY = -1)
    }
}
