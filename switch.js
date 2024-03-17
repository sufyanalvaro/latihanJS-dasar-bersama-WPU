var angka = parseInt(prompt("masukan angka : "));

switch (angka) {
  case 1:
    alert("anda memasukan angka 1");
    break;
  case 2:
    alert("anda memasukan angka 2");
    break;
  case 3:
    alert("anda memasukan angka 3");
    break;
  default:
    alert("angka yang anda masukan salah");
    break;
}

// note : menggunakan parseInt adalah mengubah input menjadi interger, karena secara default promt hanya menerima input string.
