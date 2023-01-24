// create a function that counts number of true and false values in array

const testArray = [true, false, true, true, true, false, false, false, true];

const countTF = (testArray) => {
    let trueCount = 0;
    let falseCount = 0;
    for (i=0; i < testArray.length; i++){
        if (testArray[i] === true) {
            trueCount++
        } else {
            falseCount++
        }
    };
    let totalCount = `True: ${trueCount} | False: ${falseCount} `;
    return totalCount;
};
console.log(countTF(testArray))

// given a shopping list and cart arrays create a new array that removes cart items from shopping list

// Write a function that prints from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.

for (i=1; i<=100; i++) {
    
}