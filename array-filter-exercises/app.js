//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.//
const arrayOne = [3, 6, 8, 2]

const moreThanFive = arrayOne.filter(function(num) {
    if(num >= 5) {
        return true;
    }
});
console.log(moreThanFive); /// [6, 8]

  //2. Given an array of numbers, return a new array that only includes the even numbers.//
const arrayTwo = [3, 6, 8, 2]

const evenNumbers = arrayOne.filter(function(num) {
    if(num % 2 === 0) {
        return true;
    }
});
console.log(evenNumbers);

  //3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length//
const arrayThree = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveOrFewer = arrayThree.filter(function(animal) {
    if(animal.length <= 5) {
        return true;
    }
});
console.log(fiveOrFewer); // ["by", "dog", "wolf", "eaten"]

  //4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.//
const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const memberCheck = people.filter(function(member) {
    if(member.member === true) {
        return true;
    }
});
console.log(memberCheck);
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

  //5.  Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
const peeps = 
 [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
]

const oldEnough = peeps.filter(function(check) {
    if(check.age >=80) {
        return true;
    }
});

console.log(oldEnough)
  // => 
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]