var express = require('express');
var app = express();

// display main html page
htmlPath = __dirname + "/views/index.html";
app.get("/",(req,res) => {
    res.sendFile(htmlPath);
});

app.get("/json",(req,res) => {
    res.json({
        message: "Hello json"
    });
    console.log(typeof {message: "Hello json"});
    
});

// Link to static asset
app.use("/public", express.static(__dirname + "/public"));


module.exports = app;