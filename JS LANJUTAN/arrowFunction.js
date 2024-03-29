// function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Sandhika"));

// // Arrow Function
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Sandhika"));

// // Arrow Function 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama("Sandhika", "Malam"));

// // Arrow Function implisit return : hanya 1 parameter dan isinya cuma return
// di apus apusin gak tuh,, jadi simpel kaya refactoring
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Sandhika"));

let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlHuruf: nama.length,
}));
console.table(jumlahHuruf);
