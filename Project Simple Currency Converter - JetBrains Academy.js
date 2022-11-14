
// Program that converts a provided currency to another.
// V1.0

const input = require('sync-input');
const amountCurrency = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

console.log(`Welcome to Currency Converter!`);
for (const currency in amountCurrency) {
    console.log(`1 USD equals ${amountCurrency[currency]} ${currency}`);
}

let answerInit = 0;
while (answerInit !== 2) {

    console.log(`\nWhat do you want to do?\n1-Convert currencies 2-Exit program`)

    let answerInit = input();
    if (answerInit === "2") {
        console.log("\nHave a nice day! ;)");
        break;
    } else if (answerInit === "1") {
        console.log("What do you want to convert?");

        let answerFrom = input("From: ").toUpperCase();
        while (!(answerFrom in amountCurrency)) {
            console.log('Unknown currency');
            answerFrom = input("From: ").toUpperCase()
        }

        let answerTo = input("To: ").toUpperCase();
        while (!(answerTo in amountCurrency)) {
            console.log('Unknown currency');
            answerTo = input("To: ").toUpperCase()
        }

        let answerUserAmount = input("Amount: ");
        while (isNaN(answerUserAmount) || answerUserAmount < 1) {
            if (isNaN(answerUserAmount)) {
                console.log('The amount has to be a number');
                answerUserAmount = input("Amount: ");
            } else if (answerUserAmount < 1) {
                console.log('The amount cannot be less than 1');
                answerUserAmount = input("Amount: ");
            }
        }

        if (answerUserAmount !== true) {
            console.log(`Result: ${answerUserAmount} ${answerFrom} equals ${(answerUserAmount / amountCurrency[answerFrom] * amountCurrency[answerTo]).toFixed(4)} ${answerTo}`);
        }
    } else if (answerInit !== "1" && answerInit !== "2"){
        console.log("Error: Unknown input");
    }
}

//  With functions - V1.1

/*
const input = require('sync-input');
const amountCurrency = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

console.log(`Welcome to Currency Converter!`);
for (const currency in amountCurrency) {
    console.log(`1 USD equals ${amountCurrency[currency]} ${currency}`);
}

currencyConverter()

function  currencyConverter() {

    let answerInit = 0;
    while (answerInit !== 2) {

        console.log(`\nWhat do you want to do?\n1-Convert currencies 2-Exit program`)

        let answerInit = input();
        if (answerInit === "2") {
            console.log("\nHave a nice day! ;)");
            process.exit();
        } else if (answerInit === "1") {
            console.log("What do you want to convert?");

            let answerFrom = String;
            let answerTo = String;
            let answerAmount = Number;

            answerFromFunc()

            function answerFromFunc() {
                answerFrom = input("From: ").toUpperCase();
                if (!(answerFrom in amountCurrency)) {
                    console.log("Unknown currency");
                    answerFromFunc()
                } else answerToFunc();
            }

            function answerToFunc() {
                answerTo = input("To: ").toUpperCase();
                if (!(answerTo in amountCurrency)) {
                    console.log("Unknown currency");
                    answerToFunc()
                } else answerAmountFunc();
            }

            function answerAmountFunc() {
                answerAmount = input("Amount: ");
                if (isNaN(answerAmount)) {
                    console.log('The amount has to be a number');
                    answerAmountFunc()
                } else if (answerAmount < 1) {
                    console.log('The amount cannot be less than 1');
                    answerAmountFunc()
                } else {
                    resultConvert(answerFrom, answerTo, answerAmount);
                }
            }

            function resultConvert() {
                console.log(`Result: ${answerAmount} ${answerFrom} equals ${(answerAmount / amountCurrency[answerFrom] * amountCurrency[answerTo]).toFixed(4)} ${answerTo}`);
            }
        } else if (answerInit !== "1" && answerInit !== "2") {
            console.log("Unknown input");
        }
    }
}*/