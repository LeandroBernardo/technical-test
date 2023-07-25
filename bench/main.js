const SavingsAccount = require('./accountTypes/SavingsAccount')
const CheckingAccount = require('./accountTypes/CheckingAccount')

async function main() {
  const savingsAccount = new SavingsAccount()
  const checkingAccount = new CheckingAccount()

  try {
    savingsAccount.deposit(1000)
    checkingAccount.deposit(500)

    savingsAccount.calculateInterest()

    checkingAccount.withdraw(600)
  } catch (error) {
    console.error(error.message)
  }
}

main()
