var friendData = require("../data/friends");

$("#submit").on("click", function (event) {

    event.preventDefault();

    compareFriend();

});


function compareFriend() {

    // user data
    var q1 = document.querySelector('input[name="question1"]:checked').value;
    q1 = parseInt(q1);
    var q2 = document.querySelector('input[name="question2"]:checked').value;
    q2 = parseInt(q2);
    var q3 = document.querySelector('input[name="question3"]:checked').value;
    q3 = parseInt(q3);
    var q4 = document.querySelector('input[name="question4"]:checked').value;
    q4 = parseInt(q4);
    var q5 = document.querySelector('input[name="question5"]:checked').value;
    q5 = parseInt(q5);
    var q6 = document.querySelector('input[name="question6"]:checked').value;
    q6 = parseInt(q6);
    var q7 = document.querySelector('input[name="question7"]:checked').value;
    q7 = parseInt(q7);
    var q8 = document.querySelector('input[name="question8"]:checked').value;
    q8 = parseInt(q8);
    var q9 = document.querySelector('input[name="question9"]:checked').value;
    q9 = parseInt(q9);
    var q10 = document.querySelector('input[name="question10"]:checked').value;
    q10 = parseInt(q10);

    var answerArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];


    // friend data
    var friendScoreDifferences = [];

    for (var i = 0; i < friendData.length; i++) {
        var friendAnswers = friendData.answers;
        var totalDifference = 0;
        for (var j = 0; j < friendAnswers.length; j++) {
            var friendAnswer = parseInt(friendAnswers[j]);
            totalDifference = totalDifference + Math.abs(friendAnswer - answerArray[j]);
        }
        friendScoreDifferences.push(totalDifference);
        console.log(friendAnswers);
    }

    // function for find the minimum value within an array
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };

    var minimumDifference = Array.min(friendScoreDifferences);

    var bestMatch = friendData.indexOf(minimumDifference);
    console.log(bestMatch);

    $(".modal-body").innerHTML = "<h2>" + bestMatch.name + "</h2><br><img src='" + bestMatch.image + "'>";
}