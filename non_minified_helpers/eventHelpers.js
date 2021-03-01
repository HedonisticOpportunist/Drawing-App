/*
EVENT HELPERS
***************
Implements the event methods used throughout the drawing app.
*/

/*
VARIABLES 
*/

//boolean compound conditons 
let eventConditions = {

    drawingConditon: null,
    drawSphereCondition: null,
    drawRubikCondition: null,

    drawCatsCondition: null,
    drawGhostCondition: null,
    drawKittensCondition: null,

    drawRectangleCondition: null,
    drawEllipseCondition: null,
    drawTriangleCondition: null,
    drawHeartCondition: null,
    drawLineCondition: null,

    clickedImage: null,
    imgClicked: null,
    cutBtnSelected: null
};

function EventHelpers() {

    //private variables
    this.drawRectangle = false;
    this.drawEllipse = false;

    this.drawTriangle = false;
    this.drawHeart = false;

    this.drawCone = false;
    this.drawSphere = false;

    this.drawLine = false;
    this.rubik = false;

    this.runningCat = false;
    this.ghost = false;

    this.sleepingCat = false;

    //image and stamp condition
    eventConditions.imgClicked = false;

    //cutting tool btn conditon
    eventConditions.cutBtnSelected = false;

    //shapes condition
    eventConditions.drawRectangleCondition = this.drawRectangle && !this.drawEllipse && !this.drawTriangle && !this.drawHeart && !this.drawLine;
    eventConditions.drawEllipseCondition = !this.drawRectangle && this.drawEllipse && !this.drawTriangle && !this.drawHeart && !this.drawLine;
    eventConditions.drawTriangleCondition = !this.drawRectangle && !this.drawEllipse && this.drawTriangle && !this.drawHeart && !this.drawLine;
    eventConditions.drawHeartCondition = !this.drawRectangle && !this.drawEllipse && !this.drawTriangle && this.drawHeart && !this.drawLine;
    eventConditions.drawLineCondition = !this.drawRectangle && !this.drawEllipse && !this.drawTriangle && !this.drawHeart && this.drawLine;

    //3D conditions
    eventConditions.drawConeCondition = !this.drawCone && this.drawSphere;
    eventConditions.drawSphereCondition = this.drawCone && !this.drawSphere;

    //animation condition 
    eventConditions.drawRubikCondition = !this.runningCat && !this.sleepingCat && !this.ghost && this.rubik;
    eventConditions.drawCatsCondition = this.runningCat && !this.sleepingCat && !this.ghost && !this.rubik;
    eventConditions.drawGhostCondition = !this.runningCat && !this.sleepingCat && this.ghost && !this.rubik;
    eventConditions.drawKittensCondition = !this.runningCat && this.sleepingCat && !this.ghost && !this.rubik;

    /*
    singleton array containing all the arrays
    */
    let selectorArrays = {

        /*
        cat object array containing references 
        to where the images are stored
        */
        catIDsArray: [
            {
                name: "#unicorn cat",
                clickedImg: imageProperties.cat_images[1]
            },
            {
                name: "#blue cat",
                clickedImg: imageProperties.cat_images[2]
            },
            {
                name: "#sleeping cat",
                clickedImg: imageProperties.cat_images[3]
            },
            {
                name: "#black cat",
                clickedImg: imageProperties.cat_images[4]
            },
            {
                name: "#happy cat",
                clickedImg: imageProperties.cat_images[0]
            },
            {
                name: "#black pawprints",
                clickedImg: imageProperties.cat_images[5]
            },
            {
                name: "#pink paw",
                clickedImg: imageProperties.cat_images[6]
            },
            {
                name: "#brown pawprints",
                clickedImg: imageProperties.cat_images[7]
            }
        ],
        /*
        shapes id array containing the id selectors
        referencing the images to be displayed on box options
        */
        shapesIDArray: [
        "#shape_ellipse", "#shape_triangle",
        "#shape_rectangle", "#shape_heart", "#shape_line"],
        /*
        three dimensional shapes id array containing the id
        selectors referencing the images to be displayed on box options
        */
        shapes3DArray: [
        "#threedim_sphere", "#threedim_cone"],

        /* 
        animations id array containing the id selectors 
        referencing the images to be displayed on box options
        */
        animationsArray: [
        "#rubik", "#running_cat",
        "#ghost", "#sleeping_cat_sprite"]

    };

    /* 
    ************************************ 
    
            METHODS 
    
    ************************************
    
    */

    /*
    Delegating all the mouse click related events 
    regarding buttons to one function
    */
    document.addEventListener('click', function (event) {

        if (event.target.matches('.clear')) {
            background("#f3f9fb");
            loadPixels();
        }

        if (event.target.matches('.save')) {
            saveCanvas("picture", "jpg")
        }

        if (event.target.matches('.reload')) {
            location.reload();
        }

        if (event.target.matches('.shapes')) {
            fill(getRandomValue());
        }

    }, false);

    /* 
    the following JQuery deals with the cut button 
    and setting when to draw it on the canvas
    */
    select("#cut_btn").mouseClicked(function () {

        eventConditions.cutBtnSelected = true;
    });

    for (let key in selectorArrays) {
        if (selectorArrays.hasOwnProperty(key)) {

            if (key == "catIDsArray") {

                for (let i = 0; i < selectorArrays.catIDsArray.length; i++) {
                    /* 
                    the following JQuery deals with cat images 
                    and setting when to draw them on the canvas
                    */
                    select(selectorArrays.catIDsArray[i].name).mouseClicked(function () {

                        eventConditions.imgClicked = true;
                        eventConditions.clickedImage = selectorArrays.catIDsArray[i].clickedImg;
                    });
                }
            }

            if (key == "shapesIDArray") {

                for (let j = 0; j < selectorArrays.shapesIDArray.length; j++) {

                    /* 
                    the following JQuery deals with geometric shapes 
                    and setting when to draw them on the canvas
                    */
                    select(selectorArrays.shapesIDArray[j]).mouseClicked(function () {

                        if (selectorArrays.shapesIDArray[j] == "#shape_ellipse") {

                            this.drawRectangle = false;
                            this.drawHeart = false;
                            this.drawTriangle = false;
                            this.drawEllipse = true;
                            this.drawLine = false;

                            //conditions
                            eventConditions.drawHeartCondition = false;
                            eventConditions.drawTriangleCondition = false;
                            eventConditions.drawRectangleCondition = false;
                            eventConditions.drawLineCondition = false;

                            /* 
                            set the draw ellipse conditon to 
                            true 
                            */
                            eventConditions.drawEllipseCondition = true;

                        }
                        if (selectorArrays.shapesIDArray[j] == "#shape_triangle") {

                            this.drawRectangle = false;
                            this.drawTriangle = true;
                            this.drawHeart = false;
                            this.drawEllipse = false;
                            this.drawLine = false;

                            //conditions
                            eventConditions.drawHeartCondition = false;
                            eventConditions.drawEllipseCondition = false;
                            eventConditions.drawRectangleCondition = false;
                            eventConditions.drawLineCondition = false;

                            /* 
                            set the draw triangle conditon to 
                            true 
                            */
                            eventConditions.drawTriangleCondition = true;

                        }
                        if (selectorArrays.shapesIDArray[j] == "#shape_rectangle") {

                            this.drawRectangle = true;
                            this.drawTriangle = false;
                            this.drawHeart = false;
                            this.drawEllipse = false;
                            this.drawLine = false;

                            //conditions
                            eventConditions.drawHeartCondition = false;
                            eventConditions.drawEllipseCondition = false;
                            eventConditions.drawTriangleCondition = false;
                            eventConditions.drawLineCondition = false;

                            /* 
                            set the draw rectangle conditon to 
                            true 
                            */
                            eventConditions.drawRectangleCondition = true;
                        }

                        if (selectorArrays.shapesIDArray[j] == "#shape_heart") {

                            this.drawRectangle = false;
                            this.drawTriangle = false;
                            this.drawHeart = true;
                            this.drawEllipse = false;
                            this.drawLine = false;

                            //conditions 
                            eventConditions.drawRectangleCondition = false;
                            eventConditions.drawEllipseCondition = false;
                            eventConditions.drawTriangleCondition = false;
                            eventConditions.drawLineCondition = false;

                            /* 
                            set the draw heart conditon to 
                            true 
                            */
                            eventConditions.drawHeartCondition = true;
                        }

                        if (selectorArrays.shapesIDArray[j] == "#shape_line") {

                            this.drawRectangle = false;
                            this.drawTriangle = false;
                            this.drawHeart = false;
                            this.drawEllipse = false;
                            this.drawLine = true;

                            //conditions 
                            eventConditions.drawRectangleCondition = false;
                            eventConditions.drawEllipseCondition = false;
                            eventConditions.drawTriangleCondition = false;
                            eventConditions.drawHeartCondition = false;

                            /* 
                            set the draw line conditon to 
                            true 
                            */
                            eventConditions.drawLineCondition = true;
                        }
                    });
                }
            }

            if (key == "shapes3DArray") {

                for (let k = 0; k < selectorArrays.shapes3DArray.length; k++) {

                    /* 
                    the following JQuery deals with 3D shapes 
                    and setting when to draw them on the canvas
                    */
                    select(selectorArrays.shapes3DArray[k]).mouseClicked(function () {

                        if (selectorArrays.shapes3DArray[k] == "#threedim_sphere") {

                            this.drawSphere = true;
                            this.drawCone = false;

                            //condtions 
                            eventConditions.drawSphereCondition = false;

                            /* 
                            set the draw cone conditon to 
                            true 
                            */
                            eventConditions.drawConeCondition = true;
                        }

                        if (selectorArrays.shapes3DArray[k] == "#threedim_cone") {

                            this.drawSphere = false;
                            this.drawCone = true;

                            //conditions
                            eventConditions.drawConeCondition = false;

                            /* 
                            set the sphere cone conditon to 
                            true 
                            */
                            eventConditions.drawSphereCondition = true;
                        }
                    });
                }
            }

            if (key == "animationsArray") {

                for (let m = 0; m < selectorArrays.animationsArray.length; m++) {

                    /* 
                    the following JQuery deals with animations 
                    and setting when to draw them on the canvas
                    */
                    select(selectorArrays.animationsArray[m]).mouseClicked(function () {

                        if (selectorArrays.animationsArray[m] == "#rubik") {

                            this.rubik = true;
                            this.runningCat = false;
                            this.ghost = false;
                            this.sleepingCat = false;

                            //conditions
                            eventConditions.drawCatsCondition = false;
                            eventConditions.drawGhostCondition = false;
                            eventConditions.drawKittensCondition = false;

                            /*
                            set the draw rubic conditon 
                            to true
                            */
                            eventConditions.drawRubikCondition = true;
                        }

                        if (selectorArrays.animationsArray[m] == "#running_cat") {
                            this.rubik = false;
                            this.runningCat = true;
                            this.ghost = false;
                            this.sleepingCat = false;

                            //conditions
                            eventConditions.drawRubikCondition = false;
                            eventConditions.drawGhostCondition = false;
                            eventConditions.drawKittensCondition = false;

                            /*
                            set the draw cat conditon 
                            to true
                            */
                            eventConditions.drawCatsCondition = true;
                        }

                        if (selectorArrays.animationsArray[m] == "#ghost") {

                            this.rubik = false;
                            this.runningCat = false;
                            this.ghost = true;
                            this.sleepingCat = false;

                            //conditions
                            eventConditions.drawRubikCondition = false;
                            eventConditions.drawCatsCondition = false;
                            eventConditions.drawKittensCondition = false;

                            /*
                            set the draw ghost conditon 
                            to true
                            */
                            eventConditions.drawGhostCondition = true;
                        }

                        if (selectorArrays.animationsArray[m] == "#sleeping_cat_sprite") {

                            this.rubik = false;
                            this.runningCat = false;
                            this.ghost = false;
                            this.sleepingCat = true;

                            //conditions
                            eventConditions.drawRubikCondition = false;
                            eventConditions.drawCatsCondition = false;
                            eventConditions.drawGhostCondition = false;

                            /*
                            set the draw kitten animation conditon 
                            to true
                            */
                            eventConditions.drawKittensCondition = true;
                        }
                    });
                }
            }
        }
    }
}
