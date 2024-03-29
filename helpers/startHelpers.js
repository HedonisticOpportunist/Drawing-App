/*
START HELPERS FUNCTIONS
************
Sets up the necessary
starter functions.
*/

function StartHelpers() {
  /* VARIABLES */
  let toolbox;

  /* 
  ************************************ 
      
            METHODS 
              
  ************************************
  */

  /* preload all the images necessary for 
      the drawing app */
  this.preloadImages = function () {
    //preload the sleeping kitten animation
    imageProperties.sequenceAnimation = loadAnimation(
      "animations/kitten3.webp",
      "animations/kitten4.webp",
      "animations/kitten5.webp",
      "animations/kitten6.webp",
      "animations/kitten7.webp",
      "animations/kitten8.webp"
    );

    /* nested for loop that loads both the cat images 
        and the non sequence animations */
    for (let key in imageProperties) {
      if (imageProperties.hasOwnProperty(key)) {
        if (key == "cat_images") {
          //preload the cat images
          for (let i = 0; i < imageProperties.cat_images.length; i++) {
            imageProperties.cat_images[i] = loadImage(
              imageProperties.cat_images[i]
            );
          }
        }

        if (key == "sequenceAnimation") {
          //preload the non sequence animations
          for (
            let j = 0;
            j < imageProperties.non_sequence_animations.length;
            j++
          ) {
            imageProperties.non_sequence_animations[j] = loadImage(
              imageProperties.non_sequence_animations[j]
            );
          }
        }
      }
    }
  };

  //setup the WEBGL canvas
  this.setUp3DCanvas = function (container) {
    /* set the canvas for the 3D feature to be smaller than 
            the main cavas */
    return createGraphics(400, 400, WEBGL);
  };

  /* set up all the tools for the drawing 
      application */
  this.setupTools = function () {
    canvasContainer = select("#content");
    let canvas = createCanvas(
      canvasContainer.size().width,
      canvasContainer.size().height
    );
    canvas.parent("content");
    frameRate();

    //instantiate the necessary helper functions
    helpers = new EventHelpers();
    colourP = new ColourPalette();
    toolbox = new Toolbox();

    //place the tools in an array and instantiate them
    tools = [
      new FreeHandTool(),
      new ThreeDimensionalTool(),
      new AnimationTool(),
      new SprayCanTool(),
      new ImageTool(),
      new LineToTool(),
      new GeometricShapesTool(),
      new StampTool(),
      new RandomStringTool(),
      new AddTransparentLayer(),
      new CroppingTool(),
      new EraserTool(),
      new MirrorDrawTool(),
    ];

    /* iterate through the elements in the tools array and then add them to  
        the tool box */
    for (let k = 0; k < tools.length; k++) {
      toolbox.addTool(tools[k]);
    }

    /* add title attributes to all the images that the toolbox uses */
    toolbox.addTitle(tools);

    //set the background colour to a default value
    background(drawingProperties.backgroundColour);
  };

  /* 
  ************************************ 
      
            GETTERS 
      
  ************************************
  */

  this.getToolBox = function () {
    if (toolbox != null || toolbox != undefined) {
      return toolbox;
    }
  };
}
