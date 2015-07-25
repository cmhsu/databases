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
    if (err) throw err;
    callback(rows, fields);
    connection.end(); // ??
  });
};

module.exports.getUsername = function(userID, callback) {
  module.exports.runQuery("SELECT username FROM users WHERE userID="+userID, function(rows, fields){
    callback(rows[0]);
  });
};

module.exports.getRoomname = function(roomID, callback) {
  module.exports.runQuery("SELECT roomname FROM room WHERE roomID="+roomID, function(rows, fields){
    callback(rows[0]);
  });
};