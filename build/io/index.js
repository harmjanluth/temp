var datastore, io, utils;

datastore = roquire("datastore");

utils = roquire("utils");

io = null;

exports.init = function(server) {
  io = require("socket.io").listen(server);
  return io.on("connection", function(socket) {
    log.info("[socket.io intialized]", socket.id);
    return socket.emit("ready", {});
  });
};