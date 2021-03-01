/*
ANIMATION TOOL
*/

function AnimationTool() {
    this.icon = "assets/anime.png";
    this.name = "Animation Tool";
    this.elements = document.getElementsByClassName("animation");

    //sprite-related variables
    this.sprite;
    this.cat;
    this.otherCat;
    this.ghost;
    this.direction = 90;

    this.startMouseX = -1;
    this.startMouseY = -1;
    this.drawing = false;


    this.draw = function () {


        if (mouseIsPressed && drawingProperties.sliderValue != null) {

            //make the animation-related images visible 
            for (let i = 0; i < this.elements.length; i++) {
                this.elements[i].style.visibility = 'visible';
            }

            if (this.startMouseX == -1) {

                this.startMouseX = mouseX;
                this.startMouseY = mouseY;
                this.drawing = true;
                loadPixels();
            } else {

                updatePixels();

                if (eventConditions.drawRubikCondition != false) {

                    //create a sprite consisting of rectangles that are drawn across
                    //the screen
                    this.sprite = createSprite(this.startMouseX, this.startMouseY, 50, 100);

                    //determine the velocity using the sliderValue
                    this.sprite.velocity.x = random(-1 * drawingProperties.sliderValue, drawingProperties.sliderValue - 10);
                    this.sprite.velocity.y = random(-1 * drawingProperties.sliderValue, drawingProperties.sliderValue - 10);
                    drawSprites();
                }
                if (eventConditions.drawCatsCondition != false) {

                    //create cat spites
                    this.cat = createSprite(this.startMouseX, this.startMouseY, 50, 100);
                    this.otherCat = createSprite(this.startMouseX - 100, this.startMouseY - 100, 50, 100);
                    this.cat.addAnimation('running', imageProperties.non_sequence_animations[0]);
                    this.otherCat.addAnimation('resting', imageProperties.non_sequence_animations[2]);

                    //set speed and direction
                    this.direction += 2;
                    this.cat.setSpeed(3, this.direction);
                    this.otherCat.setSpeed(3, this.direciton);

                    drawSprites();
                }

                if (eventConditions.drawGhostCondition != false) {

                    //create ghost sprite 
                    this.ghost = createSprite(this.startMouseX, this.startMouseY, 50, 100);
                    this.ghost.addAnimation('haunting', imageProperties.non_sequence_animations[1]);

                    //add attraction point and speed
                    this.ghost.attractionPoint(0.2, this.startMouseX, this.startMouseY);
                    this.ghost.maxSpeed = 5;

                    drawSprites();
                }

                if (eventConditions.drawKittensCondition != false) {

                    animation(imageProperties.sequenceAnimation, this.startMouseX, this.startMouseY);
                }
            }


        } else if (this.drawing) {

            loadPixels();

            this.drawing = false;
            this.startMouseX = -1;
            this.startMouseY = -1;
        }
    };

    /* reset the animation images' visibility to be hidden once the tool 
    has been unselected */
    this.unselectTool = function () {
        updatePixels();

        for (let j = 0; j < this.elements.length; j++) {
            this.elements[j].style.visibility = 'hidden';
        }
    };
}
