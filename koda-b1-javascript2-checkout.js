let dataPembeli = {
    id: 1,
    nama: "Ghaziy Azzam",
    email: "ghaziy@mail.com",
    alamat: "Kudus",
    usia: 23,
    agama: "Islam",
    status: "Belum Menikah"
}

let detailPesanan = {
    id: 1,
    namaBarang: "Buku Tereliye",
    totalHarga: 56000,
}

let fakturPembayaran = {...dataPembeli, ...detailPesanan, statusPembayaran: "Lunas"}
console.log(fakturPembayaran);
const {nama, email, totalHarga} = fakturPembayaran
console.log(`struk dicetak untuk ${nama} (${email}) dengan total ${totalHarga}`)
