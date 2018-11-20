const data = require("./core/data");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { JSDOM } = require('jsdom');
const fs = require('fs');

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./static/html/index.html", "utf8");
    let dom = new JSDOM(doc);
    let $ = require("jquery")(dom.window);

    res.send(dome.serialize());
})

app.use("/js", express.static("static/javascript"));
app.use("/css", express.static("static/css"));
