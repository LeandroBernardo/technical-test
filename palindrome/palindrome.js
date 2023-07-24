function palindrome(word) {
  const wordReverse = word
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .join('')
    .toLowerCase()
  const wordToCheck = word.split(' ').join('').toLowerCase()
  if (wordToCheck === wordReverse) {
    return `${word} => is a palindrome`
  }
  return `${word} => is not a palindrome`
}

// "racecar"
// "madam"
// "level"
// "deified"
// "rotor"
// "Able was I ere I saw Elba."
// "A man, a plan, a canal, Panama!"
// "Evil is a name of a foeman, as I live."
// "Was it a car or a cat I saw?"
// "Mr. Owl ate my metal worm."

