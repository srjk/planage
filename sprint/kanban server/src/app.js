"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var cors_1 = require("cors");
// import enums here
var action_1 = require("../node_modules/proflo-sprint-lib/lib/action");
var app = express_1["default"]();
var port = process.env.port || 3000;
var MONGO_URI = 'mongodb://127.0.0.1:27017/planage';
var server = http_1["default"].createServer(app);
exports.io = socket_io_1["default"](server);
app.use(express_1["default"].json());
app.use(cors_1["default"]);
exports.io.origins('*:*');
exports.io.on("connection", function (socket) {
    console.log("Conection Established");
    var previousId;
    var safeJoin = function (currentId) {
        socket.leave(previousId);
        socket.join(currentId);
        previousId = currentId;
    };
    socket.on(action_1.ProfloAgileActionTypes.MOVE_CARD_WITHIN_COLUMN, function (action, callback) {
        safeJoin(action.payload.productId);
        socket.emit('HI Sockets are connected hurray');
        callback("Successfully connected to web sockets @@ id = ", action.payload.connectedTo);
    });
    // socket.on(ProfloAgileActionTypes.MOVE_CARD_ACROSS_COLUMN, ());
    // socket.on(ProfloAgileActionTypes.CARD_COMPLETED, ());
    // socket.on(ProfloAgileActionTypes.UPDATE_CARD, ());
    // socket.on(ProfloAgileActionTypes.ADD_COLUMN, ());
    // socket.on(ProfloAgileActionTypes.DELETE_COLUMN, ());
    // socket.on(ProfloAgileActionTypes.MOVE_COLUMN, ());
    // socket.on(ProfloAgileActionTypes.EDIT_COLUMN_TITLE, ());
    // socket.on(ProfloAgileActionTypes.UPDATE_STATE, ());
});
server.listen(port, function () {
    console.log("server is running on port " + port + "!");
});
