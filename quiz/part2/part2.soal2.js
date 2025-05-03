//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  let finalStr = [];
  let strV2 = str.split('')
  for (let i = 0; i < str.length; i++) {
    finalStr.push(str[i].charCodeAt())
  }
  
  for (let i = 0; i < finalStr.length; i++) {
    for (let j = 0; j < finalStr.length - i - 1; j++) {
      if (finalStr[j] > finalStr[j + 1]) {
       let temp = finalStr[j];
       finalStr[j] = finalStr[j + 1];
       finalStr[j + 1] = temp;
      }
    }
  }
  let sortStr = '';
  for (let i = 0; i < finalStr.length; i++) {
    sortStr += String.fromCharCode(finalStr[i])
  }
  return sortStr
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
