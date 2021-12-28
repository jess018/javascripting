let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers.filter (function(number) {
  return (number % 2 == 0)
})

console.log(filtered);


//function even number = defining a function -> make a function called even numbers, and return a number 
// remainder if divided by two --> % 