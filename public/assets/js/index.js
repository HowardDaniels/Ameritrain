var express = require("express");
var mysql = require("mysql");
var app = express();

app.get('/', function(req, res){
    res.send('Hey there!');
});

app.listen(3000, function(){
    console.log("App listening on port 3000.");
});