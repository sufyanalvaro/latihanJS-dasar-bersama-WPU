// ch 44 JS Dasar WPU

// Pengelolaan angkot
// sopir
// trayek
// kas
// penumpang => penumpang naik dan penumpang turun

// case study
// nama supir : Sandhika Galih
// trayek : Cicaheum - cibiru
// penumpang : kosong
// kas : Rp 0

// membuat Object Angkot

function Angkot(namaSupir, trayek, penumpang, kas) {
  (this.namaSupir = namaSupir),
    (this.trayek = trayek),
    (this.penumpang = penumpang),
    (this.kas = kas);

  // bikin method : kalo penumpang naik, penumpang bertambah
  // kalo penumpang turun, penumpang berkuran dan kas bertambah
  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("angkot masih kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i += 1) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], [], 0);
var angkot2 = new Angkot("Zakie Ridwan", ["Antapani", "Ciroyom"], [], 0);
