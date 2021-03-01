let imageProperties = {
    cat_images: ["assets/cat_image.png", "assets/unicorn_cat.png", "assets/blue_cat.png", "assets/kitty.png", "assets/black-cat.png", "assets/pawprints.png", "assets/paw.png", "assets/brown_paw.png"],
    non_sequence_animations: ["animations/run.png", "animations/ghost.png", "animations/cat.png"],
    sequenceAnimation: null
};

function StartHelpers() {
    let n, a, t;
    this.preloadImages = function () {
        for (var e in imageProperties.sequenceAnimation = loadAnimation("animations/kitten3.png", "animations/kitten4.png", "animations/kitten5.png", "animations/kitten6.png", "animations/kitten7.png", "animations/kitten8.png"), imageProperties)
            if (imageProperties.hasOwnProperty(e)) {
                if ("cat_images" == e)
                    for (let e = 0; e < imageProperties.cat_images.length; e++) imageProperties.cat_images[e] = loadImage(imageProperties.cat_images[e]);
                if ("sequenceAnimation" == e)
                    for (let e = 0; e < imageProperties.non_sequence_animations.length; e++) imageProperties.non_sequence_animations[e] = loadImage(imageProperties.non_sequence_animations[e])
            }
    }, this.setUp3DCanvas = function (e) {
        return createGraphics(400, 400, WEBGL)
    }, this.setupTools = function () {
        canvasContainer = select("#content");
        let e = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
        e.parent("content"), frameRate(), n = new EventHelpers, t = new ColourPalette, a = new Toolbox, tools = [new FreehandTool, new LineToTool, new SprayCanTool, new MirrorDrawTool, new AddTransparentLayer, new ImageTool, new GeometricShapesTool, new StampTool, new EraserTool, new RandomStringsTool, new ThreeDimensionalTool, new AnimationTool, new CroppingTool];
        for (let e = 0; e < tools.length; e++) a.addTool(tools[e]);
        a.addTitle(tools), background(drawingProperties.backgroundColour)
    }, this.getToolBox = function () {
        if (null != a || null != a) return a
    }
}
