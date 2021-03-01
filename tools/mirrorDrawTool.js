function MirrorDrawTool() {
    this.icon = "assets/mirrorDraw.jpg", this.name = "Mirror Draw Tool", this.axis = "x", this.lineOfSymmetry = width / 2;
    var e = this;
    this.previousMouseX = -1, this.previousMouseY = -1, this.previousOppositeMouseX = -1, this.previousOppositeMouseY = -1, this.draw = function () {
        var s, e;
        updatePixels(), mouseIsPressed ? -1 == this.previousMouseX ? (this.previousMouseX = mouseX, this.previousMouseY = mouseY, this.previousOppositeMouseX = this.calculateOpposite(mouseX, "x"), this.previousOppositeMouseY = this.calculateOpposite(mouseY, "y")) : (line(this.previousMouseX, this.previousMouseY, mouseX, mouseY), this.previousMouseX = mouseX, this.previousMouseY = mouseY, s = this.calculateOpposite(mouseX, "x"), e = this.calculateOpposite(mouseY, "y"), line(this.previousOppositeMouseX, this.previousOppositeMouseY, s, e), this.previousOppositeMouseX = s, this.previousOppositeMouseY = e) : (this.previousMouseX = -1, this.previousMouseY = -1, this.previousOppositeMouseX = -1, this.previousOppositeMouseY = -1), loadPixels(), push(), strokeWeight(3), stroke("#383e56"), "x" == this.axis ? line(width / 2, 0, width / 2, height) : line(0, height / 2, width, height / 2), pop()
    }, this.calculateOpposite = function (s, e) {
        return e != this.axis ? s : s < this.lineOfSymmetry ? this.lineOfSymmetry + (this.lineOfSymmetry - s) : this.lineOfSymmetry - (s - this.lineOfSymmetry)
    }, this.unselectTool = function () {
        updatePixels(), select(".options").html("")
    }, this.populateOptions = function () {
        select(".options").html("<button id='directionButton'>Make Horizontal</button>"), select("#directionButton").mouseClicked(function () {
            let s = select("#" + this.elt.id);
            "x" == e.axis ? (e.axis = "y", e.lineOfSymmetry = height / 2, s.html("Make Vertical")) : (e.axis = "x", e.lineOfSymmetry = width / 2, s.html("Make Horizontal"))
        })
    }
}
