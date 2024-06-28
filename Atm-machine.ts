#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;  // Initial balance
let myPincode = 5726;

const pinAnswer = await inquirer.prompt([
    {
        name: "q1",
        type: "number",
        message: "Enter Your Pin code",
    },
]);

if (pinAnswer.q1 === myPincode) {
    console.log("Your Pin is Correct!");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select Option",
            choices: ["Withdraw", "Check balance"],
        }
    ]);

    if (operationAnswer.operation === "Withdraw") {
        const amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your Amount"
            }
        ]);

        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient balance.");
        } else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is: $${myBalance}`);
        }
    } else if (operationAnswer.operation === "Check balance") {
        console.log(`Your current balance is: $${myBalance}`);
    }
} else {
    console.log("Enter Your Correct Pin Number");
}
