var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'stations_database',
    user: 'root',
    password: 'root'
});