// Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan) {
    this.nama = nama;       // atribut 1
    this.nim = nim;         // atribut 2
    this.jurusan = jurusan; // atribut 3
  }

  sapa() { // method 1
    console.log(Halo, saya ${this.nama}, mahasiswa jurusan ${this.jurusan});
  }

  belajar() { // method 2
    console.log(${this.nama} sedang belajar);
  }
}

// Class Anak 1
class MahasiswaS1 extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, semester) {
    super(nama, nim, jurusan);
    this.angkatan = angkatan; // atribut 4
    this.semester = semester; // atribut 5
  }

  info() { // method 3
    console.log(
      Mahasiswa S1: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}, Semester: ${this.semester}
    );
  }

  tugas() { // method 4
    console.log(${this.nama} sedang mengerjakan tugas semester ${this.semester});
  }
}

class MahasiswaS2 extends Mahasiswa {
  constructor(nama, nim, jurusan, angkatan, semester) {
    super(nama, nim, jurusan);
    this.angkatan = angkatan;
    this.semester = semester;
  }

  info() {
    console.log(
      Mahasiswa S2: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}, Semester: ${this.semester}
    );
  }

  tugas() {
console.log(${this.nama} sedang meneliti untuk tesis di semester ${this.semester});
  }
}

const mhs1 = new MahasiswaS1("Andi", "12345", "Informatika", 2023, 3);
const mhs2 = new MahasiswaS1("Budi", "67890", "Sistem Informasi", 2022, 5);
const mhs3 = new MahasiswaS2("Citra", "98765", "Ilmu Komputer", 2021, 3);

mhs1.sapa();
mhs1.belajar();
mhs1.info();
mhs1.tugas();

console.log("-----");

mhs2.sapa();
mhs2.belajar();
mhs2.info();
mhs2.tugas();

console.log("-----");

mhs3.sapa();
mhs3.belajar();
mhs3.info();
mhs3.tugas();
