#! /usr/bin/env node

import inquirer from "inquirer";

let user_answer = await inquirer.prompt({
  type: "input",
  name: "words",
  message: "Enter your sentence.",
});
let word_count = user_answer.words.trim().split(" ").length

console.log(`Your sentence has ${word_count} words.`);
