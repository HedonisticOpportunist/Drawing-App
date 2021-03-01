function ImageTool() {
    this.icon = "assets/cat_image.png", this.name = "Image Tool", this.elements = document.querySelectorAll("[class = 'cat']"), this.draw = function () {
        if (loadPixels(), mouseIsPressed && null != drawingProperties.sliderValue) {
            for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "visible";
            this.displayedImage = eventConditions.imgClicked ? image(eventConditions.clickedImage, mouseX, mouseY, 100, 100) : this.displayedImage
        }
        loadPixels(), push(), pop()
    }, this.unselectTool = function () {
        updatePixels();
        for (let e = 0; e < this.elements.length; e++) this.elements[e].style.visibility = "hidden"
    }
}
