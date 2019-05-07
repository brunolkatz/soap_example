var soap = require('soap');
var url = 'http://localhost:8001/WebServiceGateway?wsdl';

soap.createClient(url, function(err, client) {

    if (err) throw err;
    
    console.log(client.describe().ws.gateway);

    client.getSmgw({id: 1},function(err,res){
        if (err) throw err;
        console.log(res);
    });

});