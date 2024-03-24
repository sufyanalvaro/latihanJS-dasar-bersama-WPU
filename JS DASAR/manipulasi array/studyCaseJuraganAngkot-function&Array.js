// tambahPenumpang()
// 2 parameter
// namaPenumpang
// array penumpang itu sendiri
// Rules
// jika angkot kosong, penumpang naik duduk di kursi pertama
// penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// jika ada kursi kosong (karena penumpang turun), penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu
// asumsi kursi tidak akan pernah penuh dan akan bertambah terus jika ada penumpang naik
// nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun

var penumpang = ["Sandhika", undefined, "Doddy"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri sseluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i += 1) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(namaPenumpang + " sudah ada di dalam angkot");
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        //   tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log("angkot masih kosong.");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i += 1) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + "tidak ada di dalam angkot");
        return penumpang;
      }
    }
  }
};
