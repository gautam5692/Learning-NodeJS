// Logical Error - When there is an error in logic, we don't get expected output

const logical = () => {
  let x = 5;
  if ((x = 10)) {
    console.log("x is 10");
  }
};

module.exports = logical;

/*
let x = 5;
if ((x = 10)) {
  // Assignment instead of comparision
  console.log("x is 10"); // Incorrectly print this
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]); // Prints undefined at the end of the loop
  // arr.length = 5;
  // index of last element of arr is 4
  // loop will run until i is equal to 5
}

let num = "10";
console.log(num + 5); // Expected result = 15; Prints 105
*/
