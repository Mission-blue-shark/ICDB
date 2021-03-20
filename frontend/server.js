var mysql = require("mysql");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "9685",
    database: "icdb-server"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
