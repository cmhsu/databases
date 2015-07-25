var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');
var utils = require('../utils.js');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.json(results);
        res.setStatus(200);
        res.end();
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(params, function(results) {
        res.json(results);
        res.setStatus(201);
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results) {
        res.json(results);
        res.setStatus(200);
        res.end();
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(results) {
        res.json(results);
        res.setStatus(201);
        res.end();
      });
    } 
  }
};

