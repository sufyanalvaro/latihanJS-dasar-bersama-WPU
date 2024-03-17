// for (var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal += 1) {
//   console.log("hello world " + nilaiAwal + "x");
// }

// tugas pa dika js dasar ch 20
// buatlah angkot nomor 1-6 beroperasi dengan baik, dan 7-10 sedang tidak beroperasi

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
  noAngkot += 1;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot += 1) {
  console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
}
