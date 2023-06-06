// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
   str = str.toLowerCase()
   let arr = []
   console.log(str)
   const countItems = {}
   for (const item of str) {
  // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
// console.log(result);
if (result.length !== 0) {
//     console.log('false')
  return false
}
else {
//     console.log ('true')
  return true
}
}
