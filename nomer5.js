const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Inisialisasi data awal
let inventaris = [];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, deskripsi, tanggalKedaluwarsa) {
  const produkBaru = {
    nama: nama,
    deskripsi: deskripsi,
    tanggalKedaluwarsa: tanggalKedaluwarsa
  };
  inventaris.push(produkBaru);
  console.log(`Produk "${nama}" telah ditambahkan ke inventaris.`);
}

// Fungsi untuk menghapus produk berdasarkan nama
function hapusProduk(nama) {
  const index = inventaris.findIndex(produk => produk.nama === nama);
  if (index !== -1) {
    inventaris.splice(index, 1);
    console.log(`Produk "${nama}" telah dihapus dari inventaris.`);
  } else {
    console.log(`Produk "${nama}" tidak ditemukan di inventaris.`);
  }
}

// Fungsi untuk melihat daftar produk
function lihatDaftarProduk() {
  console.log("Daftar Produk:");
  for (let produk of inventaris) {
    console.log(`Nama: ${produk.nama}`);
    console.log(`Deskripsi: ${produk.deskripsi}`);
    console.log(`Tanggal Kedaluwarsa: ${produk.tanggalKedaluwarsa}`);
    console.log("----------------------");
  }
}

// Fungsi untuk mengupdate deskripsi produk
function updateDeskripsiProduk(nama, deskripsiBaru) {
  const produk = inventaris.find(item => item.nama === nama);
  if (produk) {
    produk.deskripsi = deskripsiBaru;
    console.log(`Deskripsi produk "${nama}" telah diperbarui.`);
  } else {
    console.log(`Produk "${nama}" tidak ditemukan di inventaris.`);
  }
}

// Menjalankan program
tambahProduk("roti", "roti coklat enak bangett", "2023-09-31");
tambahProduk("mineral", "mineral segar dan nikmat", "2023-04-30");
tambahProduk("coklat", "coklat mandi wangi", "2024-02-15");
lihatDaftarProduk();
hapusProduk("Susu");
updateDeskripsiProduk("roti", "roti coklat lezat");
lihatDaftarProduk();
