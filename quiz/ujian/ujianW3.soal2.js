/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let result = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
      let namaPenumpang = arrPenumpang[i][0];
      let from = arrPenumpang[i][1].charCodeAt(0);
      let to = arrPenumpang[i][2].charCodeAt(0);
      let ruteLength = to - from;
      let biaya = ruteLength * 2000;
      
      /* OBJEK */
      let penumpangOBJ = {
        penumpang : namaPenumpang,
        naikDari : String.fromCharCode(from),
        tujuan : String.fromCharCode(to),
        bayar : biaya,
      };
    /* XXXX */
      
      result.push(penumpangOBJ);
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
