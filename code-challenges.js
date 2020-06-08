// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]

const sentence = (array) => {
  let peoplesJobs = array.map((value,index) =>{
    return `${value.name} is a ${value.occupation}`
  })
  return peoplesJobs
}
console.log(sentence(people));
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.
//
var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// // Expected output: [ 2, 0, -0, 0 ]
 var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]
//
const modulo3 = (array) =>{
  let filteredArray = array.filter((value)=> typeof (value) == 'number')
  //.filter !== even
  let finalArray = filteredArray.map((value)=> value % 3)

  return finalArray
}
console.log(modulo3(testingArray1));
console.log(modulo3(testingArray2));
//
//
//
//
// // --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.
//
testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// // Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]


const Joined = (array, array2) => {
  const arr3 = array.concat(array2)
  return [...new Set(arr3)]
}
console.log(sortedJoined(testingArray3, testingArray4));
