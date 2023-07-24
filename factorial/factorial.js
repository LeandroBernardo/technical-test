function factorial(num) {
  if (num < 0) {
    throw new Error('Factorial is not defined for negative numbers')
  } else if (num === 0 || num === 1) {
    return 1
  } else {
    let res = 1
    for (let i = 2; i <= num; i++) {
      res *= i
    }
    return res
  }
}


