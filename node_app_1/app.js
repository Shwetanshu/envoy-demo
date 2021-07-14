var express = require('express');
var app = express();
const PORT = 1111;

app.get('/', function(req, res){
    DATA =  JSON.stringify("HELLO WORLD! Listening on port " + PORT)
	res.send(DATA);
});


app.get('/app1', function(req, res){
    DATA =  JSON.stringify("Its app1 route - Listening on port " + PORT)
	res.send(DATA);
});

app.get('/app2', function(req, res){
    DATA =  JSON.stringify("Its app2 route - Listening on port " + PORT)
	res.send(DATA);
});

app.get('/admin', function(req, res){
    DATA =  JSON.stringify("Its admin page and limited access - Listening on port " + PORT)
	res.send(DATA);
});

app.listen(PORT, function(){
	console.log("Application listening on Port", PORT);
});
