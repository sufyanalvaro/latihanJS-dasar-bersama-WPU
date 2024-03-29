// Execution context, Hoisting & Scoope

// console.log(nama)
// var nama = "Sandhika"

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global Object
// this = window

// execution phase

// console.log(sayHello());

// var nama = "Sandhika";
// var umur = 33;

// function sayHello() {
//   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
// klo function harus d return. klo ga d return, bisa tulis langsung return nya ga usah nulis console.log
// tonton vids aja soalnya agak rumit

//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// agak rumit dipahami, silakan tonton ulang2 aja JS lanjutan ch 4
// execution puyeng, cek aja di Javascript Visualizer

// cobalah pahami ini masukin ke Javascript Visualizer
function satu() {
  var nama = "Sandhika";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Erik";
satu();
dua("Doddy");
console.log(nama);
