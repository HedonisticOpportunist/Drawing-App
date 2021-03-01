function SprayCanTool() {
    this.icon = "assets/spray_can.png", this.name = "Spray Can Tool", this.points = drawingProperties.sliderValue, this.spread = drawingProperties.sliderValue + 10, this.draw = function () {
        random(5, 10);
        if (mouseIsPressed && null != drawingProperties.sliderValue)
            for (let s = 0; s < this.points; s++) point(random(mouseX - this.spread, mouseX + this.spread), random(mouseY - this.spread, mouseY + this.spread))
    }
}
