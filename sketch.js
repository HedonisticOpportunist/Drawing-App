/*
Entry/Gateway script 
*/

function preload() {
    drawingProperties.startHelper = new StartHelpers();
    drawingProperties.startHelper.preloadImages();
}

function setup() {

    drawingProperties.startHelper.setupTools();

    //clear any unnecessary warnings
    console.clear();
}

/*
the draw function
*/
function draw() {

    let toolbox = drawingProperties.startHelper.getToolBox();

    if (toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw();
    } else {

        alert("It looks like you haven't got a draw function!");
    }
}
