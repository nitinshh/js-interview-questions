// find min and max value in an array without using build-in methods.

const findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
};

console.log(findMinMax([5, -3, -2, 8, 6]));

// { min: -3, max: 8 }

// -----------------------------------------------------------------------------

// find even numbers from an array


function findEvenNumbers(arr) {
    const result = [];
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i]) // Ad even numbers to the result array
        }
    }
    return result
}

const numbers = [1,2,3,4,5,6,7,8,-8,-9,10]
console.log("Even Numbers:", findEvenNumbers(numbers))

//Even Numbers: [ 2, 4, 6, 8, -8, 10 ]



// -----------------------------------------------------------------------------

// find odd numbers from an array

function findOddNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i]) % 2 === 1) {
            result.push(arr[i]); // Add odd numbers, including negatives, to the result array
        }
    }
    return result;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, -8, -9, 10, 19];
console.log("Odd Numbers:", findOddNumbers(number));

// Odd Numbers: [ 1, 3, 5, 7, -9, 19 ]

/*
Math.abs() is a built-in JavaScript function that returns the absolute value of a number.
The absolute value of a number is its non-negative version, meaning it removes any negative sign.
*/

// -----------------------------------------------------------------------------

// write a javascript program to find 2nd largest element from an array


function findSecondLargest(arr) {
    if(arr.length < 2) {
        throw new Error("Array must contain at least two elements")
    }
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i]
        }
    }
    if(secondLargest === -Infinity) {
        throw new Error ("There is no second largest element in the array")
    }
    return secondLargest;
}

const array = [10, 5, 18, 22];
console.log(findSecondLargest(array))

// output: 18

// -----------------------------------------------------------------------------



// how to check whether a string contains a substring or not in javascript


/* If you want a case-insensitive comparison, you can convert both strings to lowercase before checking

 const containsSubstring = (mainString, substring) => {
    return mainString.toLowerCase().indexOf(substring.toLowerCase()) !== -1;
 }
*/


const containsSubstring = (mainString, substring) => {
    return mainString.indexOf(substring) !== -1;
}

const mainString = "Hello, World!";
const substring = "World";

// const substring = "worlwwd";    --  substring not found


if(containsSubstring(mainString, substring)) {
    console.log("Substring found!");
} else {
    console.log("Substring not found!");
}

// Substring found!

// -----------------------------------------------------------------------------

// find the number of occurences of minimum value in the numbers list in js

const findMaxOccurance = ()=>{
    let arr = [1,2,1,3,4,1,0,1];
    
    const minValue = Math.min(...arr);
    let minArr = arr.filter(value => value ===minValue);
    
    console.log(minArr.length)
}

findMaxOccurance()

// 1

// -----------------------------------------------------------------------------

// find the largest word in a sentence

function findLargestWord(sentence) {
    const words = sentence.split(' ');
    let largestWord = '';
    
    for(const word of words) {
        if(word.length > largestWord.length) {
            largestWord = word;
        }
    }
    return largestWord;
}

const inputSentence = "This is a sample sentence for demonstration";
const largestWord = findLargestWord(inputSentence);
console.log("The largest word is:", largestWord)


// The largest word is: demonstration


// -----------------------------------------------------------------------------

// write a javascript program to find the smallest word in the given sentence

function findSmallestWord() {
    const sentence = "Find the smallest word";
    const words = sentence.split(' ');
    let smallestWord = words[0];
    
    for(let i = 1; i < words.length; i++) {
        if(words[i].length < smallestWord.length) {
            smallestWord = words[i];
        }
    }
    console.log(smallestWord);
}

findSmallestWord();

// output: the

// -----------------------------------------------------------------------------

// how to find if all the letters in a word are unique

function hasUniqueLetters(word) {
    const letterSet = new Set();
    
    for(let i = 0; i<word.length; i++) {
        const letter = word[i];
        if(letterSet.has(letter)) {
            return false;  // founf a duplicate letter
        }
        letterSet.add(letter);
    }
    return true;  // all letters are unique
}

// example usage
const word1 = "hello";
const word2 = "world";

console.log(hasUniqueLetters(word1));  // false
console.log(hasUniqueLetters(word2));  // true


// -----------------------------------------------------------------------------

// write a javascript program to find unique items from given array

const findUniqueArr = ()=>{
    
    let arr = [1,2,1,2,3,-1,-3,5,6,7,8,4]
    let seen = {};
    let uniqueArr = [];
    
    arr.forEach((item)=>{
        if(!seen[item]) {
            seen[item] = true;
            uniqueArr.push(item)
        }
    });
    console.log(uniqueArr)
}

findUniqueArr();

/*
[
  1, 2, 3, -1, -3,
  5, 6, 7,  8,  4
]
*/


// -----------------------------------------------------------------------------

/* write a javascript program which takes an array arr as an argument. this function should return
a sum of every third number in the array. starting from the the first one*/


const sumOfThirds = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 3) {
        sum += arr[i];
    }
    return sum;
}
const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Sum of thirds:", sumOfThirds(numberss)); 

// Output: 22 || (1 + 4 + 7 + 10)



// -----------------------------------------------------------------------------

// write a javascript program to find reverse of a given string

const findReverse = (string) =>{
    let reverse = "";
    
    for (let i = string.length -1; i>=0; i--) {
        reverse += string[i]
    }
    console.log(reverse)
}

findReverse("Hello i am xyz developer")

// output: repoleved zyx ma i olleH

// -----------------------------------------------------------------------------

// write a program to find if a given string is pallindrome or not


const checkPallindrome = (str) =>{
    const len = str.length;
    
    for(let i = 0; i< len/2; i++) {
        if(str[i] !== str[len - i - 1]) {
            return "Not Pallindrome"
        }
    }
    return "Pallindrome"
}

console.log(checkPallindrome("madam"))

// output: Pallindrome

// -----------------------------------------------------------------------------

// write a javascript program to find the factorial of a given number

const findFactorial = (num) =>{
    if(num == 0 || num == 1) {
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
};

console.log(findFactorial(4))

// output: 24  || (4 x 3 x 2 x 1)


// -----------------------------------------------------------------------------

// write a javascript program to move all zeros to the end

function moveZeros() {
    let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
    let j = -1;

    // Find the first zero in the array
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 0) {
            j = i;
            break;
        }
    }

    // Move non-zero elements ahead of the first zero found
    for (let i = j + 1; i <= arr.length - 1; i++) {
        if (arr[i] !== 0) {
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    console.log(arr);
}

moveZeros();


/* 
output: [
  1, 2, 3, 2, 4,
  5, 1, 0, 0, 0
]
*/

// -----------------------------------------------------------------------------

// add numbers present in a string containing random letters and numbers in JavaScript

function sumNumbersInString(str) {
    let sum = 0;
    let temp = '';

    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            temp += char;
        } else {
            if (temp !== '') {
                sum += parseInt(temp);
                temp = '';
            }
        }
    }

    if (temp !== '') {
        sum += parseInt(temp);
    }

    return sum;
}

// Example usage:
let randomString = "abc123xyz45def6";
console.log(sumNumbersInString(randomString)); // Output: 174


/*

or

function sumNumbersInString(str) {
    // Use a regular expression to find all sequences of digits in the string
    const numbers = str.match(/\d+/g);
    
    // If numbers are found, reduce them by summing their numeric values
    // If no numbers are found, return 0
    return numbers ? numbers.reduce((sum, num) => sum + Number(num), 0) : 0;
}

// Example usage:
let randomString = "abc123xyz45def6";
console.log(sumNumbersInString(randomString)); // Output: 174

*/


// -----------------------------------------------------------------------------

// add each number separately present in a string containing random letters and numbers in JavaScript

function sumDigitsInString(str) {
    let sum = 0;

    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char); // Add each digit separately
        }
    }

    return sum;
}

// Example usage:
let randomString2 = "abc123xyz45def6";
console.log(sumDigitsInString(randomString2)); // Output: 21


// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
