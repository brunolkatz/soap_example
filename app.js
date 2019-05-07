/*
 * Autor: Bruno Luiz Katzjarowski;
 * Data: 07/05/2019
 * */

var express = require('express');

var serv = require('http').Server(app);
var app = express(); //set entire express to app variable
var soap = require('soap');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
serv.listen(2000); //listen port 2000


var soap_url = 'http://localhost/soapexample';

console.log('Server Started');
