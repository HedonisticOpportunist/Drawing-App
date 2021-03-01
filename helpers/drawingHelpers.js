let drawingProperties = {
    weight: 5,
    sliderValue: 15,
    colourInput: getRandomValue(),
    backgroundColour: "#fff3e2",
    startHelper: null
};

function displaySliderValue(e) {
    drawingProperties.sliderValue = document.getElementById("output").innerHTML = parseInt(e), drawingProperties.weight = drawingProperties.sliderValue, strokeWeight(drawingProperties.weight)
}

function getRandomValue() {
    let r = "#";
    for (let e = 0; e < 6; e++) r += "0123456789ABCDEF" [Math.floor(16 * Math.random())];
    return r
}
