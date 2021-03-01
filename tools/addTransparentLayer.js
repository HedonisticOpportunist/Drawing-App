function AddTransparentLayer() {
    this.icon = "assets/change_background.png", this.name = "Add Transparent Layer Tool", this.draw = function () {
        loadPixels(), mouseIsPressed && (blendMode(LIGHTEST), fill(drawingProperties.colourInput), rect(0, 0, canvasContainer.size().width, canvasContainer.size().height)), loadPixels(), push(), pop()
    }, this.unselectTool = function () {
        updatePixels(), blendMode(BLEND)
    }
}
