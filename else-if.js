// soal dari pa dhika js dasar ch 22
// buatlah angkot nomor 8 sedang lembur

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot += 1)
  if (noAngkot <= 6) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("Angkot no. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }

// soal dari pa dhika js dasar ch 22
// buatlah angkot nomor 8 & 10 sedang lembur

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot += 1)
//   if (noAngkot <= 6) {
//     console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
//   } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//     console.log("Angkot no. " + noAngkot + " sedang lembur");
//   } else {
//     console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
//   }

//   pake operator logika  || (or)

// soal dari pa dhika js dasar ch 22
// buatlah angkot nomor 5, 8 & 10 sedang lembur

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot += 1)
  if (noAngkot <= 6 && noAngkot != 5) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot no. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }

//   caranya, di if noAngkot <= 6, pake operator logika && , serta !=
// lalu, di else if nya juga ditambahkan noAngkot 5, sedang lembur
