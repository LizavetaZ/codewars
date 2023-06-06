// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// function isValidWalk(walk) {
//     let arr = Array.from(Array(5), () => new Array(5))
//     let row = 0;
//     let colom = 0;
//     let matrixValue = 1;
//     if (walk.length == 10) {
//       while (matrixValue <= 25) {
//         arr[row, colom] = matrixValue;
//         matrixValue++;
//         for (let i = 0; i < matrixValue; i++) {
//             if (walk[i] == 'n')
//           {
//               colom++;
//           }
//           else if (walk[i] == 'e')
//           {
//               row++;
//           }
//           else if (walk[i] == 's')
//           {
//               colom--;
//           }
//           else row--;
//       }
//       if (row === 0 && colom === 0) {
//         return true;
//       }
//       else {
//         return false
//       }
//         }
//       }
//     else {
//       return false;
//     }
//   }

function isValidWalk(walk) {
  var dx = 0
var dy = 0
var dt = walk.length

for (var i = 0; i < walk.length; i++) {
switch (walk[i]) {
  case 'n': dy--; break
  case 's': dy++; break
  case 'w': dx--; break
  case 'e': dx++; break
}
}

return dt === 10 && dx === 0 && dy === 0
}
  
  isValidWalk(['n','s','n','s','n','s','n','s','n','s', 's']);