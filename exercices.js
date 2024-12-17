//String Manipulation Functions:
//1 Reverse a String :
function reverses(A) {
    return A.split('').reverse().join('');
}
const input = "MAKROUNA , Hamra";
const reverstr = reverses(input);
console.log(reverstr);

//2 Count Characters:
function count(str) {
    return str.length;
}
console.log(count("ahlabik")); 
console.log(count("mokhiwkef"));

//3 Capitalize Words: 
function capitalize(sentence) {
    return sentence
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" "); 
}
console.log(capitalize("salem alaykom"));

//Array Functions:
//1 Find Maximum and Minimum:

function Max(arr) {
    return Math.max(...arr);
}
function Min(arr) {
    return Math.min(...arr);
}
const list=[ 5, 7, 2, 8, 1];
console.log(Max(list));
console.log(Min(list));

//2 Sum of Array:
function sum(arr) {
    let a = 0;
    for (let i = 0; i < (arr.length)-1; i++) {
      a += arr[i];
    }
    return a;
  }
  const number= [1, 2, 3, 4, 5];
  const total = sum(number);
  console.log("sum equal to", total);

  //3 Filter Array ;
  function filterArray(arr, condition) {
    return arr.filter(condition);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function isEven(num) {
    return num % 2 === 0;  // Returns true if the number is even
}
console.log(filterArray(numbers, isEven));  

const moreNumbers = [3, -1, 7, -5, 2];
function isPositive(num) {
    return num >= 0;  // Returns true if the number is positive or zero
}
console.log(filterArray(moreNumbers, isPositive));  

const words = ["apple", "dog", "banana", "cat"];
function isLongWord(word) {
    return word.length >= 5;  // Returns true if the word has 5 or more characters
}
console.log(filterArray(words, isLongWord));  // Output: ["apple", "banana"]

//Mathematical Functions:
//1 Factorial:
function factorial(n) {
    if (n === 0) {
      return 1; 
    } else {
      return n * factorial(n - 1); 
    }
  }
  const num = 5;
  const result = factorial(num);
  console.log(`Factorial of ${num} is ${result}`);
  
  //2 Prime Number Check : 
  function Prime(num) {
    if (num <= 1) {
        return false;  
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  
        }
    }
    return true;  
}
console.log(Prime(11));  // Output: true (11 is prime)
console.log(Prime(4));   // Output: false (4 is not prime)

//3 Fibonacci Sequence:
function generateFibonacci(n) {
    let fibSequence = [];
    let a = 0, b = 1;

    // Generate the sequence
    for (let i = 0; i < n; i++) {
        fibSequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    return fibSequence;
}
console.log(generateFibonacci(5));  // Output: [0, 1, 1, 2, 3]