function Toolbox() {
    var o = this;
    this.tools = [], this.selectedTool = null;

    function l() {
        let t = selectAll(".sideBarItem");
        for (let e = 0; e < t.length; e++) t[e].style("border", "0");
        var e = this.id().split("sideBarItem")[0];
        o.selectTool(e), loadPixels()
    }
    this.addTool = function (e) {
        e.hasOwnProperty("icon") && e.hasOwnProperty("name") || alert("Make sure your tool has both a name and an icon"), this.tools.push(e),
            function (e, t) {
                let o = createDiv("<img src='" + e + "'></div>");
                o.class("sideBarItem"), o.id(t + "sideBarItem"), o.parent("sidebar"), o.mouseClicked(l)
            }(e.icon, e.name), null == this.selectedTool && this.selectTool(e.name)
    }, this.selectTool = function (t) {
        for (let e = 0; e < this.tools.length; e++) this.tools[e].name == t && (null != this.selectedTool && this.selectedTool.hasOwnProperty("unselectTool") && this.selectedTool.unselectTool(), this.selectedTool = this.tools[e], select("#" + t + "sideBarItem").style("border", "2px solid blue"), this.selectedTool.hasOwnProperty("populateOptions") && this.selectedTool.populateOptions())
    }, this.addTitle = function (t) {
        let o = document.querySelectorAll(".sideBarItem img");
        for (let e = 0; e < o.length; e++) o[e].title = t[e].name
    }
}
