function buatProfile(nama, usia = 20) {
    return {
        namaLengkap: nama,
        umur: usia,
        katageory: usia >= 18 ? "Dewasa" : "Belum Dewasa",
    };
}
const cekLulus = (nama = "guest", nilai = 0) => nilai >= 75 ? `${nama} lulus ujian dengan nilai ${nilai}` : `${nama} perlu belajar lagi!`;

console.log(buatProfile("Raihan", 32));
console.log(cekLulus("Alvin", 50));