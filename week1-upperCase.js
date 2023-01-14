// 1. Create a function that takes an array 
// of numbers and returns a new array with the
//  square of each number.
// 2. Create a function that takes in a number 
// of two-pointers and three-pointers made and 
// returns a basketball team’s total score. 
// Console.log the results.
// 3. Create a function that converts a string 
// to uppercase letters. Console.log the results.

arrayNumbers = [
    2,
    4,
    6,
    8,
    20

];


function arraySq (arrayNumbers) {
    let arrayNumberSq = [];
    for (i = 0; i <arrayNumbers.length; i++) {
        arrayNumberSq[i] = (arrayNumbers[i] ** 2)
    }
    return arrayNumberSq
}
console.log(arraySq(arrayNumbers))

