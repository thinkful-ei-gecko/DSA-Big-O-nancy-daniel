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
    }
    else
        return false;
    }


//answer: constant time O(1) because it doesn't matter what the input is,
//the number of operations doens't change


//3. are you here? 
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { //n
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) { //n
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
} //n^2

[1,3,4]  
[2,3,5]

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

[1,2,3,4,5,6] 

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
['book', 'cheese', 'milk', 'eggs'], ['eggs']

//answer: Linear O(n) because in the worst case, as the array length increases
//the number of operations increases

//6. Creating pairs
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) { 
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
let arr = [1,2,3,4,5]
//createPairs(arr)

//answer: polynpmial complexity O(n^2) because the number of operations increase by ^2

//7. Compute the sequence
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
//asnwer: linear because depending on the num input the number of operations grows with it

