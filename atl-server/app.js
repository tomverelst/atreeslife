var express = require('express');
var mongoose = require('mongoose');
var logger = require("./log");

mongoose.connect("mongodb://localhost/atl")
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // yay!
});

var schema = mongoose.Schema({
    name: String,
    location: {
        latitude: String,
        longitude: String
    }
});

schema.index({"location": 1});

var Memorium = mongoose.model('Memorium', schema, 'memorium');

var app = express();

// Fetch all
app.get("/memorium", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");

    Memorium.find(function(err, items){
        res.send(items);
    });

});

module.exports = app;
