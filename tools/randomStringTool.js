function RandomStringsTool() {
    this.icon = "assets/text.png", this.name = "Random Cat Emoji String Tool", this.catEmojis = ["^._.^= ∫", "ฅ(＾・ω・＾ฅ)", "(＾・ω・＾✿", "(＾・ω・＾❁）", "(=^･ω･^=)", "(^・x・^)", "(=^･ｪ･^=))ﾉ彡☆", "(^._.^)ﾉ☆( _ _).oO", "(=‐ω‐=)", "(=｀ω´=)", "(=｀ェ´=)", "(=´∇｀=)", "(=´∇｀=)", "(=^ ◡ ^=)", "(=^-ω-^=)", "(＾º◡º＾❁)"], this.draw = function () {
        loadPixels(), mouseIsPressed && null != drawingProperties.sliderValue && this.pickString(), loadPixels(), push(), pop()
    }, this.pickString = function (i) {
        textSize(drawingProperties.sliderValue), fill("#48426d");
        var t = Math.floor(Math.random() * this.catEmojis.length);
        text(this.catEmojis[t], mouseX, mouseY)
    }
}
