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
    this.drawRectangle = !1, this.drawEllipse = !1, this.drawTriangle = !1, this.drawHeart = !1, this.drawCone = !1, this.drawSphere = !1, this.drawLine = !1, this.rubik = !1, this.runningCat = !1, this.ghost = !1, this.sleepingCat = !1, eventConditions.imgClicked = !1, eventConditions.cutBtnSelected = !1, eventConditions.drawRectangleCondition = this.drawRectangle && !this.drawEllipse && !this.drawTriangle && !this.drawHeart && !this.drawLine, eventConditions.drawEllipseCondition = !this.drawRectangle && this.drawEllipse && !this.drawTriangle && !this.drawHeart && !this.drawLine, eventConditions.drawTriangleCondition = !this.drawRectangle && !this.drawEllipse && this.drawTriangle && !this.drawHeart && !this.drawLine, eventConditions.drawHeartCondition = !this.drawRectangle && !this.drawEllipse && !this.drawTriangle && this.drawHeart && !this.drawLine, eventConditions.drawLineCondition = !this.drawRectangle && !this.drawEllipse && !this.drawTriangle && !this.drawHeart && this.drawLine, eventConditions.drawConeCondition = !this.drawCone && this.drawSphere, eventConditions.drawSphereCondition = this.drawCone && !this.drawSphere, eventConditions.drawRubikCondition = !this.runningCat && !this.sleepingCat && !this.ghost && this.rubik, eventConditions.drawCatsCondition = this.runningCat && !this.sleepingCat && !this.ghost && !this.rubik, eventConditions.drawGhostCondition = !this.runningCat && !this.sleepingCat && this.ghost && !this.rubik, eventConditions.drawKittensCondition = !this.runningCat && this.sleepingCat && !this.ghost && !this.rubik;
    let n = {
        catIDsArray: [{
            name: "#unicorn cat",
            clickedImg: imageProperties.cat_images[1]
        }, {
            name: "#blue cat",
            clickedImg: imageProperties.cat_images[2]
        }, {
            name: "#sleeping cat",
            clickedImg: imageProperties.cat_images[3]
        }, {
            name: "#black cat",
            clickedImg: imageProperties.cat_images[4]
        }, {
            name: "#happy cat",
            clickedImg: imageProperties.cat_images[0]
        }, {
            name: "#black pawprints",
            clickedImg: imageProperties.cat_images[5]
        }, {
            name: "#pink paw",
            clickedImg: imageProperties.cat_images[6]
        }, {
            name: "#brown pawprints",
            clickedImg: imageProperties.cat_images[7]
        }],
        shapesIDArray: ["#shape_ellipse", "#shape_triangle", "#shape_rectangle", "#shape_heart", "#shape_line"],
        shapes3DArray: ["#threedim_sphere", "#threedim_cone"],
        animationsArray: ["#rubik", "#running_cat", "#ghost", "#sleeping_cat_sprite"]
    };
    for (var i in document.addEventListener("click", function (i) {
            i.target.matches(".clear") && (background("#f3f9fb"), loadPixels()), i.target.matches(".save") && saveCanvas("picture", "jpg"), i.target.matches(".reload") && location.reload(), i.target.matches(".shapes") && fill(getRandomValue())
        }, !1), select("#cut_btn").mouseClicked(function () {
            eventConditions.cutBtnSelected = !0
        }), n)
        if (n.hasOwnProperty(i)) {
            if ("catIDsArray" == i)
                for (let i = 0; i < n.catIDsArray.length; i++) select(n.catIDsArray[i].name).mouseClicked(function () {
                    eventConditions.imgClicked = !0, eventConditions.clickedImage = n.catIDsArray[i].clickedImg
                });
            if ("shapesIDArray" == i)
                for (let i = 0; i < n.shapesIDArray.length; i++) select(n.shapesIDArray[i]).mouseClicked(function () {
                    "#shape_ellipse" == n.shapesIDArray[i] && (this.drawRectangle = !1, this.drawHeart = !1, this.drawTriangle = !1, this.drawEllipse = !0, this.drawLine = !1, eventConditions.drawHeartCondition = !1, eventConditions.drawTriangleCondition = !1, eventConditions.drawRectangleCondition = !1, eventConditions.drawLineCondition = !1, eventConditions.drawEllipseCondition = !0), "#shape_triangle" == n.shapesIDArray[i] && (this.drawRectangle = !1, this.drawTriangle = !0, this.drawHeart = !1, this.drawEllipse = !1, this.drawLine = !1, eventConditions.drawHeartCondition = !1, eventConditions.drawEllipseCondition = !1, eventConditions.drawRectangleCondition = !1, eventConditions.drawLineCondition = !1, eventConditions.drawTriangleCondition = !0), "#shape_rectangle" == n.shapesIDArray[i] && (this.drawRectangle = !0, this.drawTriangle = !1, this.drawHeart = !1, this.drawEllipse = !1, this.drawLine = !1, eventConditions.drawHeartCondition = !1, eventConditions.drawEllipseCondition = !1, eventConditions.drawTriangleCondition = !1, eventConditions.drawLineCondition = !1, eventConditions.drawRectangleCondition = !0), "#shape_heart" == n.shapesIDArray[i] && (this.drawRectangle = !1, this.drawTriangle = !1, this.drawHeart = !0, this.drawEllipse = !1, this.drawLine = !1, eventConditions.drawRectangleCondition = !1, eventConditions.drawEllipseCondition = !1, eventConditions.drawTriangleCondition = !1, eventConditions.drawLineCondition = !1, eventConditions.drawHeartCondition = !0), "#shape_line" == n.shapesIDArray[i] && (this.drawRectangle = !1, this.drawTriangle = !1, this.drawHeart = !1, this.drawEllipse = !1, this.drawLine = !0, eventConditions.drawRectangleCondition = !1, eventConditions.drawEllipseCondition = !1, eventConditions.drawTriangleCondition = !1, eventConditions.drawHeartCondition = !1, eventConditions.drawLineCondition = !0)
                });
            if ("shapes3DArray" == i)
                for (let i = 0; i < n.shapes3DArray.length; i++) select(n.shapes3DArray[i]).mouseClicked(function () {
                    "#threedim_sphere" == n.shapes3DArray[i] && (this.drawSphere = !0, this.drawCone = !1, eventConditions.drawSphereCondition = !1, eventConditions.drawConeCondition = !0), "#threedim_cone" == n.shapes3DArray[i] && (this.drawSphere = !1, this.drawCone = !0, eventConditions.drawConeCondition = !1, eventConditions.drawSphereCondition = !0)
                });
            if ("animationsArray" == i)
                for (let i = 0; i < n.animationsArray.length; i++) select(n.animationsArray[i]).mouseClicked(function () {
                    "#rubik" == n.animationsArray[i] && (this.rubik = !0, this.runningCat = !1, this.ghost = !1, this.sleepingCat = !1, eventConditions.drawCatsCondition = !1, eventConditions.drawGhostCondition = !1, eventConditions.drawKittensCondition = !1, eventConditions.drawRubikCondition = !0), "#running_cat" == n.animationsArray[i] && (this.rubik = !1, this.runningCat = !0, this.ghost = !1, this.sleepingCat = !1, eventConditions.drawRubikCondition = !1, eventConditions.drawGhostCondition = !1, eventConditions.drawKittensCondition = !1, eventConditions.drawCatsCondition = !0), "#ghost" == n.animationsArray[i] && (this.rubik = !1, this.runningCat = !1, this.ghost = !0, this.sleepingCat = !1, eventConditions.drawRubikCondition = !1, eventConditions.drawCatsCondition = !1, eventConditions.drawKittensCondition = !1, eventConditions.drawGhostCondition = !0), "#sleeping_cat_sprite" == n.animationsArray[i] && (this.rubik = !1, this.runningCat = !1, this.ghost = !1, this.sleepingCat = !0, eventConditions.drawRubikCondition = !1, eventConditions.drawCatsCondition = !1, eventConditions.drawGhostCondition = !1, eventConditions.drawKittensCondition = !0)
                })
        }
}
