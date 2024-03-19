// menghitung 2 volume kubus, manual
// var a = 8;
// var b = 3;

// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);

// menghitung 2 volume kubus, menggunakan function
function jumlahVolumeKubus(a, b) {
  var volumeA;
  var volumeB;
  var total;

  volumeA = a * a * a;
  volumeB = b * b * b;

  total = volumeA + volumeB;

  return total;
}

console.log(jumlahVolumeKubus(8, 3));

// kalo mau manggil lagi,, tinggal panggil function nya aja bisa di pake berulang ulang

console.log(jumlahVolumeKubus(8, 3));
console.log(jumlahVolumeKubus(15, 4));
console.log(jumlahVolumeKubus(7, 18));
