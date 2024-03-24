// contoh for biasa dulu ges
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// for (var i = 0; i < angka.length; i += 1) {
//   console.log(angka[i]);
// }

// 8. forEach (translate => untuk setiap)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// angka.forEach(function (e) {
//   console.log(e);
// });
// (e) => representasi untuk elemen

// cara baca : untuk setiap element yang ada pada array angka, lakukan fungsi berikut ini (mengacu pada function (e))
// terka2 saya mah jadi maksudnya kan forEach tuh untuk setiap. jadi console.log 1, console.log 2, dst sebanyak isi element array.

// biar gak bingung, dicoba ditulis ke dalam function expression

// var cetak = function (e) {
//   console.log(e);
// };

// angka.forEach(cetak);

// contoh kalo mau pake index
var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ["Sandhika", "Galih", "Nofa"];

nama.forEach(function (e, i) {
  console.log("mahasiswa ke-" + (i + 1) + " adalah : " + e);
});

// 9. map
var angka = [1, 2, 5, 3, 6, 8, 4];
var angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join());
// penjelasannya tonton vids aja ya, ch 37 menit ke 3:52

// 10. sort => mengurutkan
var angka = [1, 2, 5, 3, 6, 8, 4];

angka.sort();
console.log(angka.join());

// case, jika ada angka double digit seperti 10, 20, 15, 18, cara sort nya beda. harus pake function

var angka = [1, 2, 10, 5, 20, 3, 15, 6, 8, 4];

angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join());

// 11. filter => mengemblalikan banyak nilai (mencari nilai pada array, mengembalikan dalam bentuk array)
var angka = [1, 2, 10, 5, 20, 3, 15, 6, 8, 4];

var angka2 = angka.filter(function (e) {
  return e > 5;
});
console.log(angka2.join());
// 12. find => mencari nilai pada array, mengembalikan dalam bentuk 1 nilai saja

var angka = [1, 2, 10, 5, 20, 3, 15, 6, 8, 4];

var angka3 = angka.find(function (e) {
  return e > 5;
});
console.log(angka3);

// silakan di cari method2 lain cenah untuk dipelajari
// tips, tau dulu arti dari nama method agar paham fungsi nya dipake buat apa
