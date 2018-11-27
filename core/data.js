
let htmlSmashData = "<ul><li>Pac-man</li></ul>";

let jsonSmashData = {
    "smashCharacters":[
        {"character":"Mario", "img":"/img/mario.png"},
        {"character":"Donkey Kong", "img":"/img/donkeykong.png"},
        {"character":"Link", "img":"/img/link.png"},
        {"character":"Samus Aran", "img":"/img/samusaran.png"},
        {"character":"Dark Samus", "img":"/img/darksamus.png"},
        {"character":"Yoshi", "img":"/img/yoshi.png"},
        {"character":"Kirby", "img":"/img/kirby.png"},
        {"character":"Fox", "img":"/img/fox.png"},
        {"character":"Pikachu", "img":"/img/pikachu.png"},
        {"character":"Luigi", "img":"/img/luigi.png"},
        {"character":"Ness", "img":"/img/ness.png"},
        {"character":"Captain Falcon", "img":"/img/falcon.png"},
        {"character":"Jiggly Puff", "img":"/img/jigglyPuff.png"},
        {"character":"Peach", "img":"/img/peach.png"},
        {"character":"Daisy", "img":"/img/daisy.png"},
        {"character":"Bowser", "img":"/img/bowser.png"},
        {"character":"Ice Climbers", "img":"/img/iceClimbers.png"},
        {"character":"Sheik", "img":"/img/sheik.png"},
        {"character":"Zelda", "img":"/img/zelda.png"},
        {"character":"Dr. Mario", "img":"/img/drMario.png"}
    ]
}
module.exports = {
  getHTML: function () {
      console.log("called: getHTML");
      // Note: this could be from a DB, for now it's just hard-coded
      return someData;
  },
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return someOtherData;
  }
};


var someOtherFunction = function () {
    console.log("Can't touch this!");
}
