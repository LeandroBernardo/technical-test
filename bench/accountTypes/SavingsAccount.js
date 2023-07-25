const BankAccount = require("../classes/BankAccount");

class SavingsAccount extends BankAccount {
  constructor() {
    super();
    this.interestRate = 0.02; 
  }

  calculateInterest() {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log("Interest calculated:", interest);
    console.log("Savings Account Balance after interest:", this.balance);
    return interest;
  }
}

module.exports = SavingsAccount;
