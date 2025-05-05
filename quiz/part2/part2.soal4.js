/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

contoh:
barbarian kenapa bisa true?
karena di bagian 'barian' terdapat b dipisah 3 karakter ari(totalnya 3) dan ketemu a

Spasi juga dianggap sebagai karakter
*/

function checkAB(num) {
  let aAt = [];
  let bAt = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 'a') {
      aAt.push(i);
    } else if (num[i] === 'b') {
      bAt.push(i);
    }
  }
  for (let i = 0; i < aAt.length; i++) {
    for (let j = 0; j < bAt.length; j++) {
      if (Math.abs(aAt[i] - bAt[j]) === 4) {
       return true;
      }
    }
  }
  return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false


/* 1 JAM BANG BUAT BERESIN INI WKWK, WITHOUT ANY HELP */
