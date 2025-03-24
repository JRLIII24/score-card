let getHomeEl = document.getElementById("home-score");
let getAwayEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

function updateHomeScore(points) {
    homeScore += points;
    getHomeEl.textContent = homeScore;
}

function updateAwayScore(points) {
    awayScore += points;
    getAwayEl.textContent = awayScore;
}

// let getHomeEl = document.getElementById("home-score")
// let getAwayEl = document.getElementById("away-score")

// let homeScore = 0;
// let awayScore = 0;


// function homeOne() {
//     homeScore += 1
//     getHomeEl.textContent = homeScore
// }

// function homeTwo() {
//     homeScore += 2
//     getHomeEl.textContent = homeScore
// }

// function homeThree() {
//     homeScore += 3
//     getHomeEl.textContent = homeScore
// }

// function awayOne() {
//     awayScore += 1
//     getAwayEl.textContent = awayScore
// }

// function awayTwo() {
//     awayScore += 2
//     getAwayEl.textContent = awayScore
// }

// function awayThree() {
//     awayScore += 3
//     getAwayEl.textContent = awayScore
// }