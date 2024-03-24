// looping biasa
// for (var i = 10; i >= 1; i -= 1) {
//   console.log(i);
// }

// pake rekursif
// function tampilAngka(n) {
//   console.log(n);
//   return tampilAngka(n - 1);
// }

// tampilAngka(10);
// ini contoh rekursif yang tidak ada kondisi berhentinya

// Base Case : kondisi akhir dari rekur sif yang menghasilkan nilai
function tampilAngka(n) {
  if (n === 0) {
    // ini si if n === 0 adalah contoh Base Case
    return;
  }

  console.log(n);
  return tampilAngka(n - 1);
}

tampilAngka(10);
