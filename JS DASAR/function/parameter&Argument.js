// contoh penggunaan Arguments (array yang berisi nilai yang dikirim saat fungsi dipanggil)
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    hasil += arguments[i];
  }

  return hasil;
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);
