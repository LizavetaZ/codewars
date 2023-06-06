// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers){
    const oddArray = [];
  const evenArray = [];
  for (let integer of integers) {
    if (integer % 2 === 0) {
      evenArray.push(integer);
    } else {
      oddArray.push(integer);
    }
  }
  return oddArray.length === 1 ? oddArray[0] : evenArray[0];
}
