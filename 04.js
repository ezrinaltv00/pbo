class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;       // public
    this.nim = nim;         // public
    this.jurusan = jurusan; // public

    let _ipk = null ;        // private (hanya bisa diakses lewat getter & setter)

    // Getter
    this.getIpk = function () {
      return _ipk;
    };

    // Setter
    this.setIpk = function (nilai) {
      if (nilai >= 0 && nilai <= 4) {
        _ipk = nilai;
      } else {
        console.log("IPK harus antara 0 - 4");
      }
    };
  }

  // method tampil data
  tampilkanData() {
    console.log(`Nama    : ${this.nama}`);
    console.log(`NIM     : ${this.nim}`);
    console.log(`Jurusan : ${this.jurusan}`);
    console.log(`IPK     : ${this.getIpk()}`);
  }
}

// ==== Objek pakai let ====
let mhs1 = new Mahasiswa("Ezrina", "202401110022", "Informatika");
mhs1.setIpk(3.8); 
mhs1.tampilkanData();

let mhs2 = new Mahasiswa("Lala", "202401110023", "Sistem Informasi");
mhs2.setIpk(5);
mhs2.tampilkanData();
