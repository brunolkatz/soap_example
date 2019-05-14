"use strict";

var soap = require('soap');
var http = require('http');
//var mysql = require('mysql');
const DBConnect = require('./dbconnect.js');

let dbConnect = new DBConnect();

/** 
 * Deve ser identico ao descrito no arquivo WSDL
*/
var service = { 
    ws: { 
        gateway: {
            getSmgw : function (args, getLastRecord)
            { 
                console.log(args, getLastRecord);
                dbConnect.getLastRecord(args);
                return true;
            },
            addSmgw : function (args, addRecord)
            { 
                console.log(args, addRecord);
                dbConnect.addRecord(args);
                return {'status': 'OK'};
            },
            deleteSmgw : function (args, deleteRecord)
            {
                console.log(args, deleteRecord);
                dbConnect.deleteRecord(args); 
                deleteRecord({
                    status: 'OK'
                });
            } 
        }
    }
};

/** 
 * Leitura do documento WSDL para especificar requisições/retornos
*/
var xml = require('fs').readFileSync('WebServiceGateway.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
});
server.listen(8001);

/** 
 * Start SOAP Server
*/
soap.listen(server, '/WebServiceGateway', service, xml);
console.log('SOAP Started');
console.log('Port: ',server.address().port);
