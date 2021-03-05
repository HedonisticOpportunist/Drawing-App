/*
START UP HELPERS
***************
Helps set up the drawing app. 
*/

import * as Helpers from StartHelpers
import * as ToolBox from ToolBox


/*
VARIABLES
*/
let imageProperties = {
  cat_images: [
    "assets/cat_image.png",
    "assets/unicorn_cat.png",
    "assets/blue_cat.png",
    "assets/kitty.png",
    "assets/black-cat.png",
    "assets/pawprints.png",
    "assets/paw.png",
    "assets/brown_paw.png",
  ],

  non_sequence_animations: [
    "animations/run.png",
    "animations/ghost.png",
    "animations/cat.png",
  ],

  sequenceAnimation: null,
};

class StartHelpers {
  constructor() {
  
    /*
    ************************************
      
            METHODS
      
    ************************************
    */

    /*
      preload all the images necessary for
      the drawing app
      */
    this.preloadImages = function () {
      //preload the sleeping kitten animation
      imageProperties.sequenceAnimation = loadAnimation(
        "animations/kitten3.png",
        "animations/kitten4.png",
        "animations/kitten5.png",
        "animations/kitten6.png",
        "animations/kitten7.png",
        "animations/kitten8.png"
      );

      /* nested for loop that loads
      both the cat images and the non sequence animations */
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
      /* set the canvas for the 3D image to be smaller than
          the main cavas */
      return window.createGraphics(400, 400, WEBGL);
    };

    /* set up all the tools for the drawing application */
    this.setupTools = function () {
      window.canvasContainer = select("#content");
      let canvas = window.createCanvas(
        window.canvasContainer.size().width,
        window.canvasContainer.size().height
      );
      canvas.parent("content");
      frameRate();

      //instantiate the necessary helper functions
      Helpers = new EventHelpers();
      ColourP = new ColourPalette();
      ToolBox = new Toolbox();

      //place the tools in an array and instantiate them
      tools = [
        new ThreeDimensionalTool(),
        new AnimationTool(),
        new GeometricShapesTool(),
        new RandomStringsTool(),
        new CroppingTool(),
        new EraserTool(),
        new FreehandTool(),
        new LineToTool(),
        new SprayCanTool(),
        new MirrorDrawTool(),
        new AddTransparentLayer(),
        new ImageTool(),
        new StampTool(),
      ];

      /*iterate through the elements in the tools array and then add them to
        the tool box*/
      for (let k = 0; k < tools.length; k++) {
        ToolBox.addTool(tools[k]);
      }

      /*add title attributes to all the images that the toolbox uses*/
      ToolBox.addTitle(tools);

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
}

export { StartHelpers };
