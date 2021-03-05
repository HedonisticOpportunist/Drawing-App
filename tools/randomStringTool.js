/*
RANDOM STRING TOOL
*/

class RandomStringsTool {
  constructor() {
    this.icon = "assets/text.png";
    this.name = "Random Cat Emoji String Tool";

    //https://cutekaomoji.com/animals/cats/
    this.catEmojis = [
      "^._.^= ∫",
      "ฅ(＾・ω・＾ฅ)",
      "(＾・ω・＾✿",
      "(＾・ω・＾❁）",
      "(=^･ω･^=)",
      "(^・x・^)",
      "(=^･ｪ･^=))ﾉ彡☆",
      "(^._.^)ﾉ☆( _ _).oO",
      "(=‐ω‐=)",
      "(=｀ω´=)",
      "(=｀ェ´=)",
      "(=´∇｀=)",
      "(=´∇｀=)",
      "(=^ ◡ ^=)",
      "(=^-ω-^=)",
      "(＾º◡º＾❁)",
    ];

    /*
    ************************************
          
            METHODS
          
    ************************************ 
    */
    this.draw = function () {
      loadPixels();

      if (mouseIsPressed && drawingProperties.sliderValue != null) {
        this.pickString();
      }

      loadPixels();
      push();
      pop();
    };

    this.pickString = function (result) {
      textSize(drawingProperties.sliderValue);
      fill("#48426d");
      //get a random value from the cat emoji array
      let randomValue = Math.floor(Math.random() * this.catEmojis.length);
      text(this.catEmojis[randomValue], mouseX, mouseY);
    };
  }
}
