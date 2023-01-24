/*
Write a function  that takes in an array of numbers as a parameter and uses the .forEach() method to double the value of all even numbers in the array. The function should not use any other loops or array methods.
*/

const arrNum = [1, 15, 72, 45, 37, 18, 32];

const doubleEvens = arrNum.forEach( (arrNum) => {
    if (arrNum % 2 === 0) {
        console.log(arrNum * 2)
    } else {
        console.log(arrNum)
    };
});

/*
Write a function that takes the array below and modifies its order as follows:
let myDreamCars = [“Charger”, “Cayenne”, “Cyber Truck”, “G Wagon”, “Civic)]
•Remove the first element
•Add your dream car as the new first element
•Remove the last element
•Add your first car as the new last element
*/

let myDreamCars = ["Charger", "Cayenne", "Cyber Truck", "G Wagon", "Civic"]  

myDreamCars.shift()
myDreamCars.unshift("Bentley Bentayga")
myDreamCars.pop()
myDreamCars.reverse()
console.log(myDreamCars)