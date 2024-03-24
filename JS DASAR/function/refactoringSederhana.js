// menghitung 2 volume kubus, menggunakan function
// function jumlahVolumeKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// console.log(jumlahVolumeKubus(8, 3));

// jika di refactoring menjadi :
function jumlahVolumeKubus(a, b) {
  return a * a * a + b * b * b;
}

console.log(jumlahVolumeKubus(8, 3));
