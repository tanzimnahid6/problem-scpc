// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(inputString) {
  let outputString = ""
  for (let i = inputString.length - 1; i >= 0; i--) {
    outputString += inputString[i]
  }
  //return the reverse string
  return outputString
}

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfAllPositiveNumbers(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i]
    }
  }
  return sum
}

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
function mostFrequentElement(arr) {
  const totalElement = {}
  let numberOfRepetition = 0
  let mostRepeatedElement

  for (let i = 0; i < arr.length; i++) {
    const startingElement = arr[i]
    totalElement[startingElement] = (totalElement[startingElement] || 0) + 1

    if (totalElement[startingElement] > numberOfRepetition) {
      numberOfRepetition = totalElement[startingElement]
      mostRepeatedElement = startingElement
    }
  }
  //return the most frequent element in an array

  return mostRepeatedElement
}

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findNumbersAndSum(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      return [left, right]
    } else if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return null // If no such pair found, return null
}

//   Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculator(num1, operator, num2) {
  let result

  switch (operator) {
    case "+":
      result = num1 + num2
      break
    case "-":
      result = num1 - num2
      break
    case "*":
      result = num1 * num2
      break
    case "/":
      if (num2 === 0) {
        result = "Any number divided by 0 is undefined."
      } else {
        result = num1 / num2
      }
      break
    default:
      result = "Oparator is not valid!"
  }

  return result
}

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
  //added all numbers ,string and characters
  const numbersLettersChars =
    uppercaseLetters + lowercaseLetters + numbers + specialChars
  let password = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbersLettersChars.length)
    password += numbersLettersChars[randomIndex]
  }
  //return the password

  return password
}

//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallest(array) {
  // Initially two variables  store the smallest and second smallest numbers.
  let smallest = array[0]
  let secondSmallest = array[0]

  // Gradually change  the smallest and second smallest numbers as needed.
  for (let x of array) {
    if (x < smallest) {
      secondSmallest = smallest
      smallest = x
    } else if (x < secondSmallest) {
      secondSmallest = x
    }
  }

  // Return the second smallest number.
  return secondSmallest
}
