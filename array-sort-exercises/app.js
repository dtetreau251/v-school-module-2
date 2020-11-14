/*# .forEach
    Returns: Undefined 
    Purpose: Used in place of a for-loop
        Caveat: For-loops allow you to customize where the loop starts, stops, and increments by.
                forEach will always loop the entire length of the array.
                
# .find()
    Returns: The first item it finds in the array that matches your criteria
    Purpose: Finding an item in an array
    
# .findIndex()
    Returns: The index number of the first item it finds in the array that matches your criteria
    Purpose: Finding the index number of an item in an array*/

//1. Sort an array from smallest number to largest//
const arrayOne = [1, 3, 5, 2, 90, 20]

arrayOne.sort(function(a,b) {
    return a-b
})
 
  console.log(arrayOne); // [1, 2, 3, 5, 20, 90] 

//2. Sort an array from largest number to smallest//
const arrayTwo = [1, 3, 5, 2, 90, 20];

arrayTwo.sort(function(a,b) {
    return b-a
})

console.log(arrayTwo);

//3. Sort an array from shortest string to longest//
const arrayThree = ["dog", "wolf", "by", "family", "eaten"];

arrayThree.sort(function(a,b) {
    return a.length - b.length;
});

console.log(arrayThree);

//4. Sort an array alphabetically//
const arrayFour = ["dog", "wolf", "by", "family", "eaten"];

arrayFour.sort();

console.log(arrayFour);

//5. Sort the objects in the array by age//
const arrayFive = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

arrayFive.sort(function(a,b) {
    return a.age - b.age;
});

console.log(arrayFive);