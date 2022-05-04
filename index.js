function hasTargetSum(array, target){
  const seenNumbers ={}

  //for (i = 0; i < array.length; i++){
    for (number of array){
    const complement = target - number
    //if (seenNumbers[complement]) return true
    if (complement in seenNumbers) return true
    seenNumbers[number] = true
    console.log(seenNumbers)
    }
    return false
}

// function hasTargetSum(array, target) {
//   for (i = 0; i < array.length; i++) {
//     for (j = (i + 1); j < array.length; j++){
//       if (array[i] + array[j] === target){
//         return true
//       }
//     }
//   }
//     return false
// }

/* 
  O(n^2)
*/

/* 
Iterate through the array  
Take first number of array, if added with second number to 
  equal target - return true
  If not, add with next number in array
  If first number plus other number in array do not equal target,
  Take second number of array and add with third number
  If sum equals target return true, it not keep looking
  Continue through all numbers
*/

/*
  We are iterating through the array
  i is the initial iteration starting at index[0]
  j is the following iterating which starts at the index right 
  after i
  We are then adding these two numbers together to see if they
  equal the target, if they do we return true, if not we return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([0, 3, 5], 5))

  console.log("")

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([5, 11, 3, 12, 15], 3))
}

module.exports = hasTargetSum;
