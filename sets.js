// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing 
// distinct letters - each taken only once - coming from s1 AND s2.

function longest(s1, s2) {
    let arr1 = s1.split('');
    let arr2 = s2.split('')
    const numbers1 = new Set(arr1);
    const numbers2 = new Set(arr2);
    //   let arr3 = numbers1;
    //   let arr4 = numbers2;
      let union = new Set([...numbers1, ...numbers2]);
    let arr5 = [...union].sort()
    // console.log(arr5)
    s3 = arr5.join('')
    //   console.log(s3)
      return s3
    //   console.log(typeof s3)
    }
    