const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.get("/", () => {
    res.sendfile(__dirname + "/public/index.html");
});
app.get("/test/:name", function (req, res) {
    res.send("Hello " + req.params.name + ", This is Node Js app");
});

app.post("/test", function (req, res) {
    console.log(req.body);
    const username = req.body.name;
    res.send("Post Route Hit by : " + username);
});

app.listen(8000, function () {
    console.log("Server is up and running at port 8000");
});