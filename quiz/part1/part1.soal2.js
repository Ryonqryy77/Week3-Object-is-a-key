//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
  let res1 = [];
  let res2 = [];
  for (let i = 1; i < angka1; i++) {
    if (angka1 % i === 0) {
      res1.push(i);
    }
  }
  for (let i = 1; i < angka2; i++) {
    if (angka2 % i === 0) {
      res2.push(i)
    }
  }
  let fSame = [];
  for (let i = 0; i < res1.length; i++) {
    if (res2.includes(res1[i])) {
      fSame.push(res1[i]);
    }
  }
  let bigger = fSame[0];
  for (let i = 0; i < fSame.length; i++) {
    if (bigger < fSame[i]) {
      bigger = fSame[i];
    }
  }
  return bigger
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
