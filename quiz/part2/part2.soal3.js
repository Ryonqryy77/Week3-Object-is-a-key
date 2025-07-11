//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let newSentences = kalimat.split('')
  for (let i = 0; i < newSentences.length; i++) {
    if (newSentences[i] === newSentences[i].toUpperCase()) {
      newSentences[i] = newSentences[i].toLowerCase()
    } else if (newSentences[i] === newSentences[i].toLowerCase()) {
      newSentences[i] = newSentences[i].toUpperCase()
    }
  }
  return newSentences.join('')
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
