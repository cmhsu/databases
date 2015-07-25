var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db')


module.exports = {
  messages: {
    get: function (req, res) {
      var queryString = 'SELECT messages.createdAt, messages.text, messages.messageID, '+
        'users.username, rooms.roomname '+
        'FROM messages WHERE messages.userID = users.userID AND messages.roomID = rooms.roomID';

      db.runQuery(queryString, function(rows, fields) {
        var data = {results: []};
        console.log(rows);
        // for (var i = 0; i < rows.length; i++) {
        //   db.getUsername(rows[i].userID, function(username) {
        //     rows[i].username = username;
        //     db.getRoomname
        //   });
        // }

      });

      res.end(/*array of messages*/);

    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

