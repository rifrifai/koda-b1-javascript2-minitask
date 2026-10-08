let dataPembeli1 = {
    id: 1,
    nama: "Ghaziy Azzam",
    email: "ghaziy@mail.com",
    alamat: "Kudus",
    usia: 23
}

let dataPembeli2 = {
    id: 2,
    nama: "Zhafran Albani",
    email: "zhafran@mail.com",
    alamat: "Semarang",
    usia: 18
}

let detailPesanan = {
    id: 1,
    namaBarang: "Buku Tereliye",
    totalHarga: 56000,
}

let fakturPembayaran = {...dataPembeli1, ...detailPesanan, statusPembayaran: "Lunas"}
let fakturPembayaran2 = {...dataPembeli2, ...detailPesanan, statusPembayaran: "Pending"}
const {nama, email, totalHarga} = fakturPembayaran
const {nama: nama2, email: email2, totalHarga: totalHarga2} = fakturPembayaran2

function checkout () {
    console.log(`struk dicetak untuk ${nama} (${email}) dengan total ${totalHarga}`)
}
function checkout2 () {
    console.log(`struk dicetak untuk ${nama2} (${email2}) dengan total ${totalHarga2}`)
}

checkout();
checkout2();