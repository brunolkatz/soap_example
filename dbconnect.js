
// require('dotenv').config();
// var mysql = require('mysql');

// // Need environment values to connect
// var conn = mysql.createConnection({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE
// });

// conn.connect(function(err) {
//     if (err) throw err;
// });
 
class DBConnect {
        
    getLastRecord(args)
    { 
        console.log('Log2: ',args);
        return (args);
    }

    addRecord(args)
    { 
        console.log('Log2: ',args);
        return (args);
    }

    deleteRecord(args)
    { 
        console.log('Log2: ',args);
        return (args);
    }

}

module.exports = DBConnect;