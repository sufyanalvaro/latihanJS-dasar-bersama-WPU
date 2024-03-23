// menampilkan isi array dengan looping
// var arr = ["Shandika", "Galih", "Nofa"];

// for (var i = 0; i < 3; i += 1) {
//   console.log(arr[i]);
// }

// menampilkan isi array, sesuai jumlah array yang ada
// var arr = ["Sandhika", "Galih", "Nofa", "Dody", "Diko"];

// for (var i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// menampilkan output misal => Mahasiswa ke 1 : Sandhika
// var arr = ["Sandhika", "Galih", "Nofa", "Dody", "Diko"];

// for (var i = 0; i < arr.length; i += 1) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr[i]);
// }

// method pada array
// 1. Join
// var arr = ["Sandhika", "Galih", "Nofa"];

// console.log(arr.join());

// kalo mau pake separator lain
// console.log(arr.join("-"));
// console.log(arr.join("  "));

// 2. Push => menambahkan elemen baru di akhir array
// var arr = ["Sandhika", "Galih", "Nofa"];

// arr.push("Doddy");
// console.log(arr.join("  "));

// 3. Pop => menghapus elemen terakhir array
// var arr = ["Sandhika", "Galih", "Nofa"];

// arr.pop();

// 4. unshift => menambahkan elemen baru di awal array
// var arr = ["Sandhika", "Galih", "Nofa"];

// arr.unshift("Dani");

// 5. shift => menghapus elemen di awal array
// var arr = ["Sandhika", "Galih", "Nofa"];

// arr.shift();
// console.log(arr.join("  "));

// 6. splice
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ["Sandhika", "Galih", "Nofa"];

// arr.splice(2, 0, "Doddy", "Fitri");
// console.log(arr.join("  "));
// dibaca, index awalnya 2, berarti di posisi nofa. yang dihapus 0 brarti ga ada yg dihapus. lalu elemen baru nya doddy dan fitri.

// 7. slice => mengiris sebuah array, menjadi array yang baru
// slice (awal, akhrir)
arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];

var arr2 = arr.slice(1, 3);
console.log(arr2.join("  "));
// dibaca, membuat array baru di arr2, mengambil index 1 sampai 2 (1,3 itu, tiga nya gak di ambil)

// slice dan splice gampang2 susah, harus di ulang2 biar paham
