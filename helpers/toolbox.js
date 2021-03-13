/*
TOOLBOX FUNCTION
***************
Implements the tools. 
*/

function Toolbox() {
    let self = this;
    this.tools = [];
    this.selectedTool = null;

    /*
    ************************************
             
              METHODS
             
    ************************************
    */

    let toolbarItemClick = function () {
        let items = selectAll(".sideBarItem");
        for (let i = 0; i < items.length; i++) {
            items[i].style("border", "0");
        }

        let toolName = this.id().split("sideBarItem")[0];
        self.selectTool(toolName);
        loadPixels();
    };

    let addToolIcon = function (icon, name) {
        let sideBarItem = createDiv("<img src='" + icon + "'></div>");
        sideBarItem.class("sideBarItem");
        sideBarItem.id(name + "sideBarItem");
        sideBarItem.parent("sidebar");
        sideBarItem.mouseClicked(toolbarItemClick);
    };

    this.addTool = function (tool) {
        if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
            alert("Make sure your tool has both a name and an icon");
        }
        this.tools.push(tool);
        addToolIcon(tool.icon, tool.name);
        if (this.selectedTool == null) {
            this.selectTool(tool.name);
        }
    };

    this.selectTool = function (toolName) {
        for (let i = 0; i < this.tools.length; i++) {
            if (this.tools[i].name == toolName) {
                if (
                    this.selectedTool != null &&
                    this.selectedTool.hasOwnProperty("unselectTool")
                ) {
                    this.selectedTool.unselectTool();
                }
                this.selectedTool = this.tools[i];
                select("#" + toolName + "sideBarItem").style(
                    "border",
                    "2px solid blue"
                );
                if (this.selectedTool.hasOwnProperty("populateOptions")) {
                    this.selectedTool.populateOptions();
                }
            }
        }
    };

    this.addTitle = function (tools) {
        let items = document.querySelectorAll(".sideBarItem img");
        for (let i = 0; i < items.length; i++) {
            items[i].title = tools[i].name;
        }
    };
}
