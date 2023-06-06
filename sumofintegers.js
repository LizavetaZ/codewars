// Given two integers a and b, which can be positive or negative, find the sum of all the integers 
// between and including them and return it. If the two numbers are equal return a or b.
function getSum(a, b)
{
   //Good luck!
  let sum;
  if (a < b) {
      sum = a
      while (a < b) {
        sum += 1
        a++
      }
  }
  else if (a > b) {
    sum = b
    while (a < b) {
        sum += 1
        b++
      }
  }
  else if (a == b) {
    sum = b
  }
  return sum
// console.log(sum)
}
