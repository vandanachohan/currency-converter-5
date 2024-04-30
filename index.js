#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\nWelcome to Code with Vandana ^Currency Convertor\n"));
// Define the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1, // Base Currency
    EUR: 0.9, // European Currency (Euro)
    JYP: 0.009, // Japanese Currency (Yen)
    CAD: 1.3, // Canadian Dollar
    AUD: 1.65, // Australian Dollar
    PKR: 277.70, // Pakistan Rupees
    // Add more currency and their exchange rates here
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:",
    },
]);
// Perform currency conversion using the formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
if (isNaN(amount) || amount <= 0) {
    console.log("Please enter a valid amount.");
}
else {
    // Formula for conversion
    let base_amount = amount / from_amount;
    let converted_amount = base_amount * to_amount;
    // Display the converted amount
    console.log(`Converted Amount = ${chalk.bgGreenBright(converted_amount.toFixed(2))}`);
}
