/* 1. Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120

Don't forget to return the result.

2. Write a function that converts hours into seconds.

Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400
Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.

3.Create an SQL with your favorite dishes and cuisines. 
*/

//  *** 1 *** 
const converter = (minutes) => {
    const seconds = minutes * 60;
    return seconds
};

const minInSec = converter (3);

console.log(minInSec)

const converter1 = (minutes1) => {
    const seconds1 = minutes1 * 60;
    return seconds1
};

console.log(converter1(5))

// *** 2 ***

const convertHS = (hours) => {
    const sec = hours * 3600;
    return sec
};

const hr = convertHS(2);

console.log(hr)

// *** 3 ***

CREATE TABLE favdishes (
    ID INT Primary Key not null auto_increment,
    dishes VARCHAR (30),
    cuisine VARCHAR (30)
);

INSERT INTO favdishes values ("1", "Grilled Octopus", "Mediterranean");

INSERT INTO favdishes values ("2", "Borsh", "Russian");

INSERT INTO favdishes values ("3", "Caprese salad", "Italian")