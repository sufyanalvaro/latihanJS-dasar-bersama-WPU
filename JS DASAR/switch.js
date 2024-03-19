// var angka = parseInt(prompt("masukan angka : "));

// switch (angka) {
//   case 1:
//     alert("anda memasukan angka 1");
//     break;
//   case 2:
//     alert("anda memasukan angka 2");
//     break;
//   case 3:
//     alert("anda memasukan angka 3");
//     break;
//   default:
//     alert("angka yang anda masukan salah");
//     break;
// }

// note : menggunakan parseInt adalah mengubah input menjadi interger, karena secara default promt hanya menerima input string.

// contoh program sederhana
// var item = prompt(
//   "masukan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)"
// );

// switch (item) {
//   case "nasi":
//     alert("makanan / minuman SEHAT !");
//     break;
//   case "daging":
//     alert("makanan / minuman SEHAT !");
//     break;
//   case "susu":
//     alert("makanan / minuman SEHAT !");
//     break;
//   case "hamburger":
//     alert("makanan / minuman TIDAK SEHAT !");
//     break;
//   case "softdrink":
//     alert("makanan / minuman TIDAK SEHAT !");
//     break;
//   default:
//     alert("anda memasukan nama makanan / minuman yang salah !");
//     break;
// }

// cara tidak menggunakan break
var item = prompt(
  "masukan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)"
);

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan / minuman SEHAT !");
    break;
  case "hamburger":
  case "softdrink":
    alert("makanan / minuman TIDAK SEHAT !");
    break;
  default:
    alert("anda memasukan nama makanan / minuman yang salah !");
    break;
}
