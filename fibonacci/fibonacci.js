function fibonacci(num) {
  if (num <= 0) {
    return 'Please type a number greater than 0'
  }

  if (num === 1 || num === 2) {
    return 1
  }

  let firstPrev = 1
  let lastPrev = 1
  let reducer

  for (let i = 3; i <= num; i++) {
    reducer = firstPrev + lastPrev
    firstPrev = lastPrev
    lastPrev = reducer
  }
  return reducer
}


