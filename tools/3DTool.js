function ThreeDimensionalTool() {
    this.icon = "assets/3d.png", this.name = "3D Tool", this.elements = document.getElementsByClassName("threedim"), this.graphics, this.frames, this.lowerBound = 200, this.upperBound = 800, this.cone = null, this.sphere = null, this.image, this.draw = function () {
        if (mouseIsPressed) {
            for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "visible";
            this.frames = frameCount, this.frames > this.lowerBound && this.frames < this.upperBound && (this.graphics = drawingProperties.startHelper.setUp3DCanvas(canvasContainer), console.log(this.graphics), this.graphics.background(drawingProperties.colourInput), this.graphics.rotateZ(.01 * frameCount), this.graphics.rotateX(.01 * frameCount), this.graphics.rotateY(.01 * frameCount), this.graphics.texture(imageProperties.non_sequence_animations[1]), this.sphere = 0 != eventConditions.drawSphereCondition ? this.graphics.sphere(70) : this.sphere, this.cone = 0 != eventConditions.drawConeCondition ? this.graphics.cone(70, 30) : this.cone, null == this.graphics && null == this.graphics || (this.image = image(this.graphics, mouseX, mouseY)), loadPixels(), push(), pop(), console.clear()), this.frames > this.upperBound && (clear(), noStroke(), fill(0), textFont("Helvetica"), textSize(18), text("You've exhausted the amount of frames allowed to run for new 3D drawings.\nPlease re-load the application if you want to create a new 3D drawing.\nJust make sure to save your previous changes.", 100, 200))
        }
    }, this.unselectTool = function () {
        updatePixels();
        for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "hidden";
        let e = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
        background(drawingProperties.backgroundColour), e.parent("content"), null == this.graphics && null == this.graphics || image(this.graphics, mouseX, mouseY)
    }
}
