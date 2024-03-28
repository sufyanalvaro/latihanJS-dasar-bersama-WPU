// // pake objectCreate agar hanya memanggil yang dipakai saja
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan !`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain !`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur !`);
//   },
// };

// function mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandhika = mahasiswa("Sandhika", 50);
// let Doddy = mahasiswa("Doddy", 30);

// // Pake Prototype

function Mahasiswa(nama, energi) {
  //   sebetulnya secara default constructor itu sudah mempunyai parent namanya prototype.
  //   let this = Object.create(Mahasiswa.prototype);

  this.nama = nama;
  this.energi = energi;

  //   return this;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan !`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi += jam;
  return `Halo ${this.nama}, selamat bermain !`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur !`;
};

let sandhika = new Mahasiswa("Sandhika", 50);
