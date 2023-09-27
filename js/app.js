//defined an array with the variable name foods using const.
const foods = [];
//printed the contents of the array and added a string and also created a new line break to print the response.
console.log('Exercise 1 Result:\n', foods);
//I added two new items in the food array by using unshift and push. I wanted to get familiar with unshift but note that it will add it to only the beginning of an array.
foods.unshift('pizza', 'cheeseburger');
//foods.push('pizza','cheeseburger'); another option

//I am printing the second exercise results in the console for the array foods.
console.log('Exercise 2 Result:\n', foods);
//using unshift to the array I am able to add taco to the beginning of the array.
foods.unshift('taco');
console.log('Exercise 3 Result:\n', foods);
// I had to figure out how the computer would understand what the question is asking, so I broke it down. I know I needed a variable names favFood, so I started there by creating a variable and I know that I variable needs a keywords so I used Let. Then the question made sense that pizza is located at index 1 and it is in array so I had to write it as such. I was pleasantly surprised to see that it worked.
let favFood = foods[1];
console.log('Exercise 4 Result:\n', favFood);
//I did a console.log of all the food items so I can have an idea of how to complete exercise 5.
console.log(foods);
//I remembered that splice can add/remove so I know that first item is the index, and the second item is the how many do you want to delete, and anything thereafter is addition. pizza is index 1, so if I want it after pizza I have to start at index 2. I am not removing anything so that is 0, and I am adding the food tofu so that is now in index 2 before cheeseburger which has now been moved to index 3.
foods.splice(2, 0, 'tofu');
//I am printing to ensure that it was updated.
console.log(foods);
console.log('Exercise 5 Result:\n', foods);
//using splice I was able to remove pizza by its index, which is 1, that is my starting position to deletion, and since pizza is the only item from the array that I am deleting I put 1 to indicate that I am only deleting one item. Splice allows me to add after that so I just added the other two strings sushi and cupcake.
foods.splice(1, 1, 'sushi', 'cupcake');
console.log('Exercise 6 Result:\n', foods);
//using slice, which I initially confused with splice, I used the index I wanted to include as the first element so sushi is at 1 and since cupcake is at 2, I had to use 3 to include that.
let yummy = foods.slice(1,3);
//I wanted to check that sushi and cupcake were added.
console.log(foods);
console.log('Exercise 7 Result:\n', yummy);
//this is saying that I have to create a new variable soyIdx. In the new variable I am locating where tofu is in the foods variable and returning that position.
let soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 Result:\n', soyIdx);
//this is asking me to use the join method to add ->. I used join and by following the syntax I created a screen with the -> and made sure I had spaces before and after.
let allFoods = foods.join(' -> ');
console.log('Exercise 9 Result:\n', allFoods);
// includes creates a boolean, so I created a variable hasSoup and assigned foods.includes with the string soup to check if it is in the array. It was not therefore it is false.
let hasSoup = foods.includes('soup');
console.log('Exercise 10 Result:\n', hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
//this is the new array that will hold the odd numbers. add each odd number to a new array named odds.
let odds = [];
//Using remainder means that all positive numbers in the boolean will = 0 therefore making it false. It is false so it will not print those numbers and will print the true numbers, which are all odd.
nums.forEach((number) => {
  if(number%2){
    console.log(number);
//in order to put all the odd numbers into the odd array I had to use push and number.
    odds.push(number);
  }
} );
console.log('Exercise 11 Result:\n', odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays: fizz, buzz or fizzbuzz - based upon the following:
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.

   I copied and pasted the instruction here but I created separate arrays for those words. The arrays are empty for the numbers to pass through.
*/
let fizz = [];
let buzz = [];
let fizzbuzz = [];
//here is the forEach method and I made num the callfunction which is passing through each element of the array.
nums.forEach((num) => {
  //	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5. I used a remainder because the result with be 0 when divided by 2 which makes the statement false, however if I make it strictly equal to 0 then it becomes a true statement. Since it is using an and operator for both conditions I had to add && to make sure both conditions that passed through was true.
  if(num%3 ===0 && num%5 ===0){
    console.log(num);
    fizzbuzz.push(num);
//Add to the fizz array if the number is evenly divisible by 3. This is the same idea that is has to be divisible 3 and then make it a true statement.
  } else if (num%3 ===0){
    console.log(num);
    fizz.push(num);
// Add to the buzz array if the number is evenly divisible by 5. Has to be divisible by 5 and make it a true statement.
  } else if (num%5 ===0){
    console.log(num);
    buzz.push(num);
  }
});
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
// I made an array called numList. In order to get the last array I used .length-1 to the numArrays.
let numList = numArrays[numArrays.length-1];
//assign the last nested array to a variable named numList.
console.log('Exercise 13 Result:\n', numList);
/*
Exercise 14:
  - Given the above numArrays array,
*/
//access the number 66 and assign to a variable named num. to access the number 66 I had to use index to locate the array then another index to locate the position within that array.
 let num = numArrays[2][1];
console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/
// I created a variable called total and initialized the total variable with 0.
let total = 0;
//use nested forEach methods to sum up all the numbers contained within numArrays. I created a forEach method for numArrays and the callfunction, which will search every element in the array, I named array. In order to go into the array to run the forEach on the actual number I made a forEach function for array, which has already been declared and named the elements in the array num. next I reassigned the value of total to equal the num in the array and plus total to get the sum of all the numbers in the arrays.
numArrays.forEach(function(array) {
   array.forEach(function(num){
     total = total + num;
   })
});

console.log('Exercise 15 Result:\n', total);
