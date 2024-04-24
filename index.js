#! /usr/bin/env node
import inquirer from "inquirer";
const ramdomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    },
]);
if (answer.userGuessedNumber === ramdomNumber) {
    console.log("Congtratulation! You Guess right number.");
}
else {
    console.log("You guess wrong number!");
}
