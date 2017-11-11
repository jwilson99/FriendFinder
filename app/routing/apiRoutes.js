// includes data from friends.js
var friendDatas = require("../data/friends");

var express = require("express");
var app = module.exports = express();

// module.exports = function (app) {

    // for getting data from friends.js
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // for posting data to friends.js
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        console.log(newFriend);

        var friendScoreDifferences = [];


        for (var i = 0; i < newFriend.answers.length; i++){
            newFriend.answers[i] = parseInt(newFriend.answers[i]);
        }

        console.log(newFriend.answers);


        // friend data
        var friendScoreDifferences = [];

        for (var i = 0; i < friendDatas.length; i++) {
            var friendData = friendDatas[i].answers;
            var totalDifference = 0;
            for (var j = 0; j < friendData.length; j++) {
                var friendAnswer = parseInt(friendData[j]);
                totalDifference = totalDifference + Math.abs(friendAnswer - newFriend.answers[j]);
            }
            friendScoreDifferences.push(totalDifference);

        }

        // function for find the minimum value within an array
        Array.min = function (array) {
            return Math.min.apply(Math, array);
        };

        var minimumDifference = Array.min(friendScoreDifferences);
        console.log(minimumDifference);
        console.log(friendScoreDifferences.indexOf(minimumDifference));

        // best match determined by minimum answer difference
        var bestMatch = friendDatas[friendScoreDifferences.indexOf(minimumDifference)];
        console.log(bestMatch);



        friendData.push(newFriend);
        res.send(bestMatch);


    });

// };