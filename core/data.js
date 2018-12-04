
let htmlSmashData = "<p>Characters that we wish would come to the next Super Smash Bros. game: </p>"
+ "<ul id='htmlreq'>
+ "<li><div><div>Patrick Star</div></div></li>"
+ "<li>Spongebob</li>""
+ "<li>Gritty</li>"
+ "<li>Arnold Schwarzenegger</li>"
+ "<li>Naruto</li>"
+ "<li>Iron Man</li>"
+ "<li>Goku</li>"
+ "<li>Steve Jobs</li>"
+ "<li>Thanos</li>"
+ "<li>Black Widow</li>"
+ "</ul>";

let jsonSmashData =
[{
	"name": "Mario",
	"image": "/img/mario.png",
}, {
	"name": "Samus",
	"image": "/img/samus.png",
}, {
	"name": "Pikachu",
	"image": "/img/pikachu.png",
}, {
	"name": "Falco",
	"image": "/img/falco.png",
}, {
	"name": "Fox",
	"image": "/img/fox.png",
}, {
	"name": "Captain Falcon",
	"image": "/img/captainfalcon.png",
}, {
	"name": "Mr. Game and Watch",
	"image": "/img/mrgameandwatch.png",
}, {
	"name": "Wii Fitness Trainer",
	"image": "/img/wiifitnesstrainer.png",

}]

module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return htmlSmashData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return jsonSmashData;
  }
};


var someOtherFunction = function () {
    console.log("Can't touch this!");
}
