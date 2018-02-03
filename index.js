var index = require("./word.js")


var wordBank = ["Oblivion", "Skyrim", "Halo Reach", "Mass Effect"]


var inquirer = require("inquirer");
var letter = process.argv[2];
var guessesLeft = 10