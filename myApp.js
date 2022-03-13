var express = require('express');
var app = express();

app.get("/",(req,res) => {
    res.type("html").send("<div>hello<div>")
});


































 module.exports = app;