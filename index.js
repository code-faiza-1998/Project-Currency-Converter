import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let UserAnswer = await inquirer.prompt([{
        name: "from",
        message: (chalk.greenBright("Enter from currency")),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: (chalk.greenBright("Enter to currency")),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: (chalk.greenBright("Enter your amount")),
        type: "number",
    }
]);
let fromAmount = currency[UserAnswer.from];
let toAmount = currency[UserAnswer.to];
let amount = UserAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed());
