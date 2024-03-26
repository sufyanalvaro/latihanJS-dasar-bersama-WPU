// 1. Revisited membuat object dengan cara Literal

// let mahasiswa = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan !`);
//   },
// };

// 2. Revisited membuat object dengan cara function declaration
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain !`);
//   };

//   return mahasiswa;
// }

// let sandhika = mahasiswa("Sandhika", 50);

// 3. Revisited membuat object dengan cara constructor
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan !`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain !`);
  };
}

let sandhika = new Mahasiswa("Sandhika", 50);
