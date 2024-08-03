#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(`\n`);
console.log(chalk.yellow(`=`.repeat(70)));
console.log(`\t  WELCOME TO QUIZ (Maximum Marks : 05)`);
console.log(chalk.yellow(`=`.repeat(70)));
console.log(`\n`);
let marks = 0;
let Quiz1 = await inquirer.prompt([{
        name: "one",
        type: "list",
        message: "Q1-Typescrit is a Super set of ?",
        choices: ["Python", "C++", "Javascript", "Typescript"]
    }]);
if (Quiz1.one === "Javascript") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz2 = await inquirer.prompt([{
        name: "question2",
        type: "list",
        message: "Which company developed TypeScript?",
        choices: ["Google", "Microsoft", "Facebook", "Apple"],
    }]);
if (Quiz2.question2 === "Microsoft") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz3 = await inquirer.prompt([{
        name: "question3",
        type: "list",
        message: "Which of the following is not a TypeScript data type?",
        choices: ["String", "Number", "Boolean", "Character"],
    }]);
if (Quiz3.question3 === "Character") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz4 = await inquirer.prompt([{
        name: "question4",
        type: "list",
        message: "What is the file extension for TypeScript files?",
        choices: [".js", ".ts", ".jsx", ".tsx"],
    }]);
if (Quiz4.question4 === ".ts") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz5 = await inquirer.prompt([{
        name: "question5",
        type: "list",
        message: "Which command compiles a TypeScript file?",
        choices: ["tsc", "node", "npm", "ng"],
    }]);
if (Quiz5.question5 === "tsc") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz6 = await inquirer.prompt([{
        name: "question6",
        type: "list",
        message: "Which feature of TypeScript allows you to catch errors at compile time?",
        choices: ["Static typing", "Dynamic typing", "Async/Await", "Modules"],
    }]);
if (Quiz6.question6 === "Static typing") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz7 = await inquirer.prompt([{
        name: "question7",
        type: "list",
        message: "Which of the following is used to define a variable in TypeScript?",
        choices: ["var", "let", "const", "All of the above"],
    }]);
if (Quiz7.question7 === "All of the above") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz8 = await inquirer.prompt([{
        name: "question8",
        type: "list",
        message: "How do you explicitly specify the type of a variable in TypeScript?",
        choices: [":type", "::type", "as type", "->type"],
    }]);
if (Quiz8.question8 === ":type") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz9 = await inquirer.prompt([{
        name: "question9",
        type: "list",
        message: "Which keyword is used to inherit a class in TypeScript?",
        choices: ["implements", "extends", "inherits", "uses"],
    }]);
if (Quiz9.question9 === "extends") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
let Quiz10 = await inquirer.prompt([{
        name: "question10",
        type: "list",
        message: "Which decorator is used to define a class as an Angular component?",
        choices: ["@Controller", "@Component", "@Injectable", "@Module"],
    }]);
if (Quiz10.question10 === "@Component") {
    console.log(chalk.green.bold("Your answer is Correct"));
    marks++;
}
else {
    console.log(chalk.red.bold(`Wrong Answer`));
}
console.log(`\n`);
if (marks >= 5) {
    console.log(chalk.yellow(`=`.repeat(70)));
    console.log(`Congratulation You have corrected ${marks} answers out of 10`);
}
else {
    console.log("Aww! You need more learning. Try again :)");
}
console.log(chalk.yellow(`=`.repeat(70)));
