// includes data from friends.js
var friendData = require("../data/friends");

module.exports = function (app) {

    // for getting data from friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // for posting data to friends.js
    app.post("/api/friends", function (req, res) {
        var something = req.body;
        friendData.push(something);
        res.send(friendData);
    });

};