let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra"); // mengganti value sebelumnya

console.log(mahasiswa.get("001")); // Output: Andi
console.log(mahasiswa.get("002")); // Output: Citra
console.log(mahasiswa.get("003")); // Output: Citra


function printItems(items) {
    items.forEach(item => console.log(item));
}

printItems([1, 2, 3]);           // Output: 1, 2, 3
printItems(["A", "B", "C"]);     // Output: A, B, C
printItems([1, 2, 3, "A", "B", "C"]);     // Output: 1, 2, 3, A, B, C


mahasiswa.set("22001", { nama: "Andi", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });

console.log(mahasiswa.get("22001").nama); // Output: Andi


let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); 

console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas', 'Belajar OOP ' }
