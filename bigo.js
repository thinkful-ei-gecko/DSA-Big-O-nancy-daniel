// 1) Determine the Big O for the following algorithm:
// You are sitting in a room with 15 people. You want
// to find a playmate for your dog, preferably of the same breed.
// So you want to know if anyone out of the 15 people have the same breed
// as your dog. You stand up and yell out, who here has a golden retriever
// and would like to be a playdate for my golden.
// Someone yells - "I do, be happy to bring him over"

// //answer: Constant time because is doesn't matter how many people or in
// other words, array of people. There only one input (the announcement) and
// one output (someone yelling)

// 2) Determine the Big O for the following algorithm:
//  You are sitting in a room with 15 people. You want to find
//  a playmate for your dog who is of the same breed. So you want
//  to know if anyone out of the 15 people have the same breed
//  as your dog. You start with the first person and ask him if
//   he has a golden retriever. He says no, then you ask the next
//    person, and the next, and the next until you find someone
//    who has a golden or there is no one else to ask.

//answer: linear because as the number of people increases the
//the number of operations increases linearly.

// 2. even or odd
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}

//answer: constant time O(1) because it doesn't matter what the input is,
//the number of operations doens't change

//3. are you here?
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    //n
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      //n
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
} //n^2

[1, 3, 4][(2, 3, 5)];

//answer: polynomial time O(n^2) because this algorithm requires 2
//levels of looping over. As the input size grows the time complexity will
//grow much more

//4. doubler
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

[1, 2, 3, 4, 5, 6];

//answer: Linear O(n) because as the array length increases the number of operation
//proportionally increases

//5. Naive search
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
['book', 'cheese', 'milk', 'eggs'], ['eggs'];

//answer: Linear O(n) because in the worst case, as the array length increases
//the number of operations increases

//6. Creating pairs
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}
let arr = [1, 2, 3, 4, 5];
//createPairs(arr)

//answer: polynpmial complexity O(n^2) because the number of operations increase by ^2



//7. Compute the sequence
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}
//asnwer: linear because depending on the num input the number of operations grows with it computes the fibonnaci sequence for the number provided

//8: Efficient Search
// This function is logarithmic time because each time the function iterates through the while loop, it divides the size of the input in half. This keeps the run time increase based on the size of the input to a minimum.

//9: Random Element
// The random element function pulls a random number from an array, based on the length of the array. This is an example of constant time complexity, as the number of operations will remain the same as the array size is increased.

//10: What am I?
//This function determines whether or not a number is prime, returning true if the number is prime. This function features a linear time complexity, as the number of operations increases steadily as the size of the input is increased.

//11: Tower of Hanoi
// function TOH(num, source, dest, temp) {
//   if (num === 0) {
//     console.log(source, '->', dest);
//     return;
//   }
//   if (num === 3) {
//     console.log(source, '->', dest);
//     return TOH(num - 1, source, dest, temp);
//   }

//   if (num === 2) {
//     console.log(source, '->', temp);
//     console.log(dest, '->', temp);
//     return TOH(num - 1, source, dest, temp);
//   }

//   if (num === 1) {
//     console.log(source, '->', dest);
//     console.log(temp, '->', source);
//     console.log(temp, '->', dest);
//     return TOH(num - 1, source, dest, temp);
//   }
// }

// console.log(TOH(4, 'a', 'c', 'b'));

///////////////////////////////////////////////// 12: Iterative version- Solve the first 7 problems from yesterday iteratively.


//linear complexity
//1. Counting sheep 

// function countSheep(num) {
//   for (let i = num; i > 0; i--) {
//     if (i > 0) {
//       console.log(`${i}: Another sheep jumps over the fence`);
//     }
//   }
//   console.log('All sheep jumped over the fence');
// }

// console.log(countSheep(3));


//linear complexity
//2: PowerCalculator

// function PowerCalculator(base, exponent) {
//   let result = base;
//   if (exponent === 1) {
//     result = base;
//   }
//   if (exponent < 0) {
//     result = 'Must use positive numbers';
//   }
//   if (exponent === 0) {
//     result = 1;
//   }

//   for (let i = exponent; i > 1; i--) {
//     result *= base;
//   }

//   return result;
// }

// console.log(PowerCalculator(5, 2));

//linear complexity
//3: Reverse String

// function reverse(str) {
//   let arr = [];
//   for (let i = str.length; i >= 0; i--) {
//     arr.push(str[i]);
//   }
//   return arr.join('');
// }

// console.log(reverse('hello'));


//linear complexity
//4: nTh trianglular number

// function triNum(num) {
//   let result = 0;
//   for (let i = num; i > 0; i--) {
//     result += i;
//   }
//   return result;
// }

// console.log(triNum(5));


//log complexity
//5: String Splitter

// function split(str, sep) {
//   let result = []
//   let sepindex = 0;
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] === sep) {
//       sepindex = str.indexOf(str[i])
//       result.push(str.slice(i, sepindex));
//     }
//   }
//   return result;
// }

// console.log(split('20/20/2020', '/'));

//linear complexity
//6: Fibonacci

// function fib(n) {
//   let results = [0, 1]
//   for (let i = 2; i < n; i++) {
//     results.push(results[i-2] + results[i-1])
//   }
//   return results;
// }

// console.log(fib(8));

//linear complexity
//7: factorial
// function factorial(num) {
//   let result = num;
//   for (let i = num - 1; i > 0; i--) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(4));


//////////////////////////////////// recursive big O 
//countsheep: linear

//powercalculator: linear

//linear

//triangle: linear

//split linear 

//factorial: linear

//fib: linear

//maze: polynomial

//mazeall: polynomial

//anagram: polynomial

//binary: linear


