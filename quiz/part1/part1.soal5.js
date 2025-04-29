//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  let newKata = kata.split('')
  for (let i = 0; i < newKata.length; i++) {
      let kode = newKata[i].charCodeAt(0);
      kode1 = kode + 1;
      newKata[i] = String.fromCharCode(kode1);
      
  }
  return newKata.join('')
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
