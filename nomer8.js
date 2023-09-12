const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Inisialisasi data awal
let gudang = {};

// Fungsi untuk menambahkan produk baru ke dalam gudang
function tambahProduk(kategori, namaProduk, jumlahStok) {
  if (!gudang[kategori]) {
    gudang[kategori] = [];
  }
  gudang[kategori].push({ nama: namaProduk, stok: jumlahStok });
  console.log(`Produk "${namaProduk}" (${kategori}) ditambahkan ke dalam gudang.`);
}

// Fungsi untuk menghapus produk dari gudang
function hapusProduk(kategori, namaProduk) {
  if (gudang[kategori]) {
    const index = gudang[kategori].findIndex(produk => produk.nama === namaProduk);
    if (index !== -1) {
      gudang[kategori].splice(index, 1);
      console.log(`Produk "${namaProduk}" (${kategori}) dihapus dari gudang.`);
    } else {
      console.log(`Produk "${namaProduk}" tidak ditemukan dalam kategori ${kategori}.`);
    }
  } else {
    console.log(`Kategori ${kategori} tidak ditemukan.`);
  }
}

// Fungsi untuk mencari produk berdasarkan kategori
function cariProdukByKategori(kategori) {
  if (gudang[kategori]) {
    return gudang[kategori];
  } else {
    console.log(`Kategori ${kategori} tidak ditemukan.`);
    return [];
  }
}

// Fungsi untuk mengecek stok produk
function cekStok(kategori, namaProduk) {
  if (gudang[kategori]) {
    const produk = gudang[kategori].find(produk => produk.nama === namaProduk);
    if (produk) {
      console.log(`Stok produk "${namaProduk}" (${kategori}): ${produk.stok}`);
    } else {
      console.log(`Produk "${namaProduk}" tidak ditemukan dalam kategori ${kategori}.`);
    }
  } else {
    console.log(`Kategori ${kategori} tidak ditemukan.`);
  }
}

// Menjalankan program
tambahProduk("Elektronik", "Laptop", 10);
tambahProduk("Pakaian", "switer", 20);
tambahProduk("Pakaian", "jaket", 30);
hapusProduk("Pakaian", "Celana");
console.log(cariProdukByKategori("Pakaian"));
cekStok("Pakaian", "switer");
cekStok("Pakaian", "Celana");
