var mysql = require('mysql');
var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"

});

var sql ="INSERT INTO Customers (id,name, address) VALUES (2,'sun','set 35'),(3, 'John', 'Lloyds Office 3'),(4, 'Jane', 'Lloyds Office54'),(5,'fluk','ton555')";
     
    con.query(sql, function (err, result) {

          if (err) throw err; 

          console.log("Customer Created.");

    });

