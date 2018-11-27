let htmlSmashData = "<ul><li>Pac-man</li></ul>";

let jsonSmashData = {
  "smashCharacters":[
      {"character":"Mario", "img":"/img/mario.png"},
      {"character":"Donkey Kong", "img":"/img/donkeykong.png"},
      {"character":"Link", "img":"/img/link.png"},
      {"character":"Samus Aran", "img":"/img/samusaran.png"},
      {"character":"Dark Samus", "img":"/img/darksamus.png"},
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
