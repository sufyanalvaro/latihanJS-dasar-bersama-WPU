// Object Literal & Function Declaration

// 1. Object Literal
var mhs1 = {
  nama: "Sandhika Galih",
  nrp: "040340023",
  email: "sandhikagalih@unpas.ac.id",
  jurusan: "Teknik Informatika",
};

var mhs2 = {
  nama: "Doddy",
  nrp: "033040007",
  email: "doddy@gmail.com",
  jurusan: "Teknik Industri",
};

// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  "Nofariza",
  "023040123",
  "nofa@yahoo.com",
  "Teknik Pangan"
);

// 3. Constructor => mirip function declaration, tapi gak dipakein var mhs = {} , dan ga dipakein return karan udah dibikinin sama js nya
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa(
  "Erik",
  "013040321",
  "erik@icloud.com",
  "Teknik Mesin"
);
// note : harus pake new, karena bukan function declaration.
// kalo gak pake new, ke trigger nya function declaration, dan berarti harus pake deklarasi var serta return
