var connect, location;

connect = require("./connect");

location = require("./models/location");

exports.find = function(query, callback) {
  return location.find(query, function(result) {
    return callback(result);
  });
};
