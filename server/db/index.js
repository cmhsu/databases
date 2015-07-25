var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


module.exports.runQuery = function(queryString, callback) {
  var connection = mysql.createConnection({
    user: "root",
    password: "",
    database: "chat"
  });

  connection.connect();

  connection.query(queryString, function(err, rows, fields) {
    if (err) throw error;
    callback(rows, fields);
    connection.end(); // ??
  });
};