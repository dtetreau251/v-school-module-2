/*Use the Rest Operator to help this function return an array of animals, 
no matter how many animals are passed to it:*/

function collectAnimals(...args) {  
    return args
}

console.log(collectAnimals("fish","dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


/*Write a function that returns a food object with the array names as 
properties using Object Literals:*/

function combineFruit(fruit, sweets, vegetables) {
    return { fruit: fruit, sweets: sweets, vegetables: vegetables }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

/*Use destructuring to use the property names as variables. Desructure the
 object in the parameter:*/

 const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  

  function parseSentence( { location, duration } ){
    return `We're going to have a good time in ${location} for ${duration}`
  }

  console.log(parseSentence(vacation))

//Use destructuring to make this code ES6//
const tools = ["saw","hammer","nails"]

function returnFirst(items){
    const [first] = items; /*change this line to be es6*/
    console.log(first)
}

returnFirst(tools)

/*Write destructuring code to assign variables that will help us return 
the expected string. Also, change the string to be using Template literals:*/

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [first, second, third] = arr
    console.log(`My top three favorite activities are: ${first}, ${second}, and ${third}`);
}

returnFavorites(favoriteActivities)

/*Use the Rest and Spread Operator to help take any number of arrays,
 and return one array. You will need to change how the arrays are passed
in. You may write it assuming you will always recieve three arrays if 
you would like to.*/

function combineAnimals(...args) {  
    const [first] = args
    console.log([first])
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
const combined = [...realAnimals,...magicalAnimals,...mysteriousAnimals]

combineAnimals(combined); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6xy://

const product = (...args) => {  
    var numbers = [...args];
  
    return numbers.reduce((acc, number) => acc * number, 1)
  }

console.log(product(2,3,4,5,6))

/*Make the following function more ES6xy. Use at least both the rest and
 spread operators:*/



