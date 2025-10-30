// Kelompok 3
// Ezrina
// Shaula
// Aliqa
// Valdinata

class Kendaraan {
    constructor(merk) {
        this.merk = merk;
        // cegah instansiasi langsung dari kelas abstrak
        if (new.target === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }
    }

    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

class Mobil extends Kendaraan {
    maju() {
        return `${this.merk} melaju dengan kecepatan tinggi!`;
    }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // "Toyota Avanza melaju dengan kecepatan tinggi!"

// contoh: jika dicoba instansiasi Kendaraan langsung -> akan error
// const kendaraanBaru = new Kendaraan("Generic"); // Error

// Interface sebagai objek blueprint (konsep saja)
const kendaraanInterface = {
    maju: function () {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};

class Sepeda extends Kendaraan {
    constructor(merk) {
        super(merk); // pastikan memanggil konstruktor parent
    }

    maju() {
        return `${this.merk} melaju dengan tenaga manusia!`;
    }
}

const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // "Polygon melaju dengan tenaga manusia!"

// pengecekan sederhana kepatuhan "interface"
if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}

// --- kelas Pembayaran (abstrak) ---
class Pembayaran {
    constructor(jumlah) {
        this.jumlah = jumlah;
        if (new.target === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
        }
    }

    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
}

class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
    }
}

class PayPal extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
    }
}

const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // "Pembayaran 500000 melalui Kartu Kredit berhasil!"

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // "Pembayaran 250000 melalui PayPal berhasil!"
