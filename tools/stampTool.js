function StampTool() {
    this.icon = "assets/stamp.png", this.name = "Stamp Tool", this.size = null, this.elements = document.querySelectorAll("[class = 'stamp']"), this.displayedStamp = null, this.draw = function () {
        if (mouseIsPressed && null != drawingProperties.sliderValue) {
            for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "visible";
            var e = mouseX,
                s = (s = mouseY) < -21 ? 50 : mouseY;
            this.size = drawingProperties.sliderValue, this.displayedStamp = eventConditions.imgClicked ? image(eventConditions.clickedImage, e, s, this.size, this.size) : this.displayedStamp
        }
        loadPixels(), push(), pop()
    }, this.unselectTool = function () {
        updatePixels();
        for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "hidden"
    }
}
