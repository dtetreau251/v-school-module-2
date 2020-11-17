/*# .reduce()
    Returns: Whatever you want it to! (See video for explanation)
    Purpose: Take an array of data and Reduce it into a smaller or completely different data set.*/

//1. Turn an array of numbers into a total of all the numbers//
const arrayOne =  [1, 2, 3]

const result1 = arrayOne.reduce(function(final, current) {
    final = final + current
    return final
}, 0)


console.log(result1)

//2. Turn an array of numbers into a long string of all those numbers.//
arrayTwo = [1,2,3]

const result2 = arrayTwo.reduce(function(final, current) {
    final.push(current.toString())
    return final
}, [])

console.log(result2.join(''));

//3. Turn an array of voter objects into a count of how many people voted//

 const voters1 = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];

 const voteCount = voters1.reduce(function(final, voter) {
    if(voter.voted) {
        final++
    }
    return final
}, 0);

 console.log(voteCount); // 7

 //4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once//

 var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

 
 const totalCost = wishlist.reduce(function(final, wishes) {
     final += wishes.price
     return final
    
 }, 0);
 

 console.log(totalCost); // 227005

 
 //5. Given an array of arrays, flatten them into a single array//

 var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const flattened = arrays.reduce(function(final, user) {
    return final.concat(user)
},[])
 
 console.log(flattened); // ["1", "2", "3", true, 4, 5, 6];

 /*6. Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = voters.reduce(function(final, voter){
    if(voter.voted && voter.age <=25) {
        final.numYoungVotes++
    } else if (voter.voted && voter.age <= 35 && voter.age > 25) {
        final.numMidVotesPeople++
    } else if (voter.voted && voter.age > 35) {
        final.numOldVotesPeople++
    }

    if(voter.age <= 25) {
        final.numYoungPeople++
    } else if (voter.age > 25 && voter.age <= 35) {
        final.numMidsPeople++
    } else if (voter.age > 35) {
        final.numOldsPeople++
    }

    return final

}, { numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0 })

console.log(voterResults); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

