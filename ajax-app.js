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

//default get function
app.get("/ajax-GET", function (req, res) {
    //Set type of response
    res.setHeader("Content-Type", "application/json");
    let out = //TODO: figure out what it outputs;
    res.send({msg: out});
})

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = lists.getHTML();
        res.send(dataList);

    } else if(formatOfResponse == 'json-list') {

        res.setHeader('Content-Type', 'application/json');
        dataList = lists.getJSON();
        res.send(dataList);

    } else {
        res.send({msg: 'Wrong format!'});
    }
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/post-form", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log("Stuff sent to server", req.body);
    res.send(["you sent me:", req.body]);
})

//For page not found
app.use(function (req, res, next) {
    res.status(404).send("<html><head><title>Page not found</title></head>"
    + "<body><p>Nothing here</p></body></html>");
})

//RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log("Listening on port " + port + "!");
})
