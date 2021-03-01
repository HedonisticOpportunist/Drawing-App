function ColourPalette() {
    this.colourPicker = new iro.ColorPicker(".picker", {
        width: 85,
        height: 20,
        color: "rgb(255, 0, 0)",
        borderWidth: 1,
        borderColor: "#fff",
        layout: [{
            component: iro.ui.Wheel
        }, {
            component: iro.ui.Slider,
            options: {
                sliderSize: 10
            }
        }]
    }), this.loadColours = function () {
        fill(drawingProperties.colourInput), stroke(drawingProperties.colourInput), this.colourPicker.on("input:change", function (o) {
            drawingProperties.colourInput = o.hexString, fill(drawingProperties.colourInput), stroke(drawingProperties.colourInput)
        })
    }, this.loadColours()
}
