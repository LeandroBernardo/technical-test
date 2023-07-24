function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial is not defined for negative numbers")
  }
}

factorial(-1)