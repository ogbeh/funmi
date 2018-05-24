const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
let app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded(true));
app.use(morgan("tiny"));
app.use("/public", + __dirname);


app.get("/", function(req, res){
    res.send("This is Open");
});

app.listen(3000, function(){
    console.log(`Listening on port ${3000}`)
});