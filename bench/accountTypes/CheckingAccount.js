const BankAccount = require("../classes/BankAccount");

class CheckingAccount extends BankAccount {
  constructor() {
    super();
    this.overdraftLimit = 1000; 
  }

  withdraw(amount) {
    const availableBalance = this.balance + this.overdraftLimit;
    if (amount <= availableBalance) {
      this.balance -= amount;
      console.log("Withdrawal amount:", amount);
      console.log("Checking Account Balance after withdrawal:", this.balance);
      return amount;
    } else {
      throw new Error("Insufficient funds.");
    }
  }
}

module.exports = CheckingAccount;
