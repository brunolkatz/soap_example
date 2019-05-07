/*
 * Autor: Bruno Luiz Katzjarowski;
 * Data: 07/05/2019
 * */

var serv = require('http').Server(app);
var soap = require('soap');

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));
serv.listen(2000); //listen port 2000


var url = 'http://localhost/wsdl?wsdl';
