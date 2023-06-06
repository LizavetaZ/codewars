// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    word = word.toLowerCase()
    let arr = []
 //    console.log(word)
    const countItems = {}
    for (const item of word) {
   // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
   countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
 }
 const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
 // console.log(result);
 for (let i = 0; i < word.length; i++) {
     if (result.includes(word[i])) {
         arr.push(')')
     }
     else {
         arr.push('(')
     }
 }
 // console.log(arr)
 str = arr.join('')
 // console.log(str)
   return str
 }
 