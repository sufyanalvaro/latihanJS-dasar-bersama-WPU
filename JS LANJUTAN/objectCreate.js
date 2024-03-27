// jika pake function declaration biasa,, semua method akan dipanggil walau gak dipake
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

// pake objectCreate agar hanya memanggil yang dipakai saja
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan !`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain !`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur !`);
  },
};

function mahasiswa(nama, energi) {
  //   let mahasiswa = {};
  let mahasiswa = Object.create(methodMahasiswa);
  //   pake object.create nih
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  //   mahasiswa.makan = methodMahasiswa.makan;
  //   mahasiswa.main = methodMahasiswa.main;
  //   mahasiswa.main = methodMahasiswa.tidur;
  // karena sudah memakai object.create, maka tidak perlu lagi mendefinisikan method ini.

  return mahasiswa;
}

let sandhika = mahasiswa("Sandhika", 50);
let Doddy = mahasiswa("Doddy", 30);
