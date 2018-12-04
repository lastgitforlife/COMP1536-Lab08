
//HTML LIST
let htmlSmashData = "<h1>Character Suggestions</h1><p>Characters that we wish would come to the next Super Smash Bros. game: </p>"
+ "<ul class='uldesktop'>"
+ "<li><div class='divborder'><img class='charimg' src='/img/patrickstar.png'/><div class='centertext'>Patrick Star</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/spongebob.png'/><div class='centertext'>Spongebob</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/guyfieri.png'/><div class='centertext'>Guy Fieri</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/arnold.png'/><div class='centertext'>Arnold Schwarzenegger</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/naruto.png'/><div class='centertext'>Naruto</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/ironman.png'/><div class='centertext'>Iron Man</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/goku.png'/><div class='centertext'>Goku</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/stevejobs.png'/><div class='centertext'>Steve Jobs</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/thanos.png'/><div class='centertext'>Thanos</div></div></li>"
+ "<li><div class='divborder'><img class='charimg' src='/img/blackwidow.png'/><div class='centertext'>Black Widow</div></div></li>"
+ "</ul>";

// HTML PAGE
let htmlAboutUs = "<h1>About Us</h1><p>This webpage is created by Garret T. and Patrick W. in 2018 for lab08.</p>";

// HTML PAGE
let htmlGeneralInformation = "<h1>General Information</h1><p>Super Smash Bros. Ultimate is a 2D side-scrolling fighting game featuring a "
+ "diverse group of characters from the Nintendo franchise. With at least 70 available characters to choose from,"
+ " this game will be fun to play for up to eight players! Available on the Nintendo Switch starting on December 7, 2018.</p>";

//JSON LIST
let jsonSmashData =
[{
	"name": "Mario",
	"image": "/img/mario.png"
}, {
	"name": "Samus",
	"image": "/img/samus.png"
}, {
	"name": "Pikachu",
	"image": "/img/pikachu.png"
}, {
	"name": "Falco",
	"image": "/img/falco.png"
}, {
	"name": "Fox",
	"image": "/img/fox.png"
}, {
	"name": "Captain Falcon",
	"image": "/img/captainfalcon.png"
}, {
	"name": "Mr. Game and Watch",
	"image": "/img/mrgameandwatch.png"
}, {
	"name": "Wii Fitness Trainer",
	"image": "/img/wiifitnesstrainer.png"
}, {
	"name": "Kirby",
	"image": "/img/kirby.png"
}, {
	"name": "Villager",
	"image": "/img/villager.png"
}]


//FUNCTIONS TO GET
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
  },
	getAboutUs: function () {
			console.log("called getAboutUs");

			return htmlAboutUs;
	},
	getGeneralInformation: function () {
			console.log("called getGeneralInformation");

			return htmlGeneralInformation;
	}
};


var someOtherFunction = function () {
    console.log("Can't touch this!");
}
