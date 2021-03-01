/*
DRAWING HELPERS
***************
Helps configure the drawing app.

*/

let drawingProperties = {
    weight: 5,
    sliderValue: 15,
    colourInput: getRandomValue(), //colourInput changes to a random value on upon start or reload
    backgroundColour: "#fff3e2",
    startHelper: null
};

/*
************************************ 
    
            METHODS 
    
************************************
    
*/

/*
The weight of the stroke / and or size of an item is changed depending on the
value you retrieved from the slider
*/
function displaySliderValue(val) {
    drawingProperties.sliderValue = document.getElementById("output").innerHTML = parseInt(val);
    drawingProperties.weight = drawingProperties.sliderValue;
    strokeWeight(drawingProperties.weight);
}

/*
Generates a random hex colour
https://stackoverflow.com/questions/1484506/random-color-generator
*/
function getRandomValue() {
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}
