// bikin output *****
// for (var i = 0; i < 5; i += 1) console.log("*");

// karna yang atas salah, ini yang bener : *****
// var s = "";

// for (var i = 0; i < 5; i += 1) {
//   s += "*";
// }
// console.log(s);

// kalo output bintang nya ke bawah bukan ke samping kanan
// var s = "";

// for (var i = 0; i < 5; i += 1) {
//   s += "*";
//   s += "\n";
// }
// console.log(s);

// kalo outputnya mau ke bawah, tapi tiap baris 5 bintang
// var s = "";

// for (var i = 0; i < 5; i += 1) {
//   for (var j = 0; j < 5; j += 1) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// kalo outputnya seperti ini
// *
// **
// ***
// ****
// *****
// var s = "";

// for (var i = 0; i < 5; i += 1) {
//   for (var j = 0; j <= i; j += 1) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// kalo outputnya terbalik dari yang output atas :
// *****
// ****
// ***
// **
// *
var s = "";

for (var i = 5; i > 0; i -= 1) {
  for (var j = 0; j < i; j += 1) {
    s += "*";
  }
  s += "\n";
}
console.log(s);
