
const balance = 1000;


function displayMenu() {
    console.log("Welcome to the ATM");
    console.log("1. Withdraw Money");
    console.log("2. Check Balance");
    console.log("3. Exit");
}


function withdrawMoney(amount) {
    if (amount > balance) {
        console.log("Insufficient balance");
    } else {
        balance -= amount;
        console.log("Withdrawal successful. Remaining balance: $" + balance);
    }
}


function checkBalance() {
    console.log("Your current balance is: $" + balance);
}


function runATM() {
    let choice = 0;
    while (choice !== 3) {
        displayMenu();
        choice = parseInt(prompt("Enter your choice (1-3):"));
        switch (choice) {
            case 1:
                let withdrawalAmount = parseFloat(prompt("Enter amount to withdraw:"));
                withdrawMoney(withdrawalAmount);
                break;
            case 2:
                checkBalance();
                break;
            case 3:
                console.log("Thank you for using the ATM");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}


runATM();
