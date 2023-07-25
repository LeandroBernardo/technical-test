 class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    return this.balance
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount
      return amount
    } else {
      throw new Error('insufficient balance')
    }
  }

  getBalance() {
    this.balance
  }
}

module.exports = BankAccount