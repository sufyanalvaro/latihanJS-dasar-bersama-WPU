// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot += 1)
//   if (noAngkot <= 6) {
//     console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
//   } else  {
//     console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
//   }

//   soal dari pa dhika js dasar ch 22

var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot += 1)
  if (noAngkot <= 6) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("Angkot no. " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi");
  }
