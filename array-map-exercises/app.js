
//1. Make an array of numbers that are doubles of the first array//

    const arr = [2, 5, 100]
    const result = arr.map(function(num){
        return num *  2
    })
  
    console.log(result); // [4, 10, 200]

  //2. Take an array of numbers and make them strings//
    const numbers = [1, 2, 3, 4];
    const toStrings = numbers.map(number => '' + number);

    console.log(toStrings);

  //3.Capitilize each of an array of names//
    const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

    const uppercased = names.map(name => name.toUpperCase());
  
    console.log(uppercased); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

  //4.Make an array of strings of the names//
  const people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 
    const justNames = people.map(function(person) {
        return person['name'];
    });

  console.log(justNames)

  //5. Make an array of strings of the names saying whether or not they can go to The Matrix//
    const matrix = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
        },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
    const inMatrix = matrix.map(function(redPill) {
        if (redPill['age'] > 18) {
        return redPill['name'] + " can go to the Matrix"
        } else {
            return redPill['name'] + " is under age!!"
        }
    });

    console.log(inMatrix);


  //6. Make an array of the names in h1's and the ages in h2's//
 const celebrities =  [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

const readyForTheDom = celebrities.map(function(headers) {
        return [`<h1>${headers.name}</h1><h2>${headers.age}</h2>`]
    });

console.log(readyForTheDom)
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]