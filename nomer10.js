const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Inisialisasi data awal
let perpustakaan = [];

// Fungsi untuk menambahkan buku baru ke dalam perpustakaan
function tambahBuku(judul, penulis, tahunTerbit, jumlahSalinan, nilaiBuku) {
  const bukuBaru = {
    judul: judul,
    penulis: penulis,
    tahunTerbit: tahunTerbit,
    jumlahSalinan: jumlahSalinan,
    nilaiBuku: nilaiBuku
  };
  perpustakaan.push(bukuBaru);
  console.log(`Buku "${judul}" ditambahkan ke dalam perpustakaan.`);
}

// Fungsi untuk menghapus buku dari perpustakaan berdasarkan judul
function hapusBuku(judul) {
  const index = perpustakaan.findIndex(buku => buku.judul === judul);
  if (index !== -1) {
    perpustakaan.splice(index, 1);
    console.log(`Buku "${judul}" dihapus dari perpustakaan.`);
  } else {
    console.log(`Buku "${judul}" tidak ditemukan dalam perpustakaan.`);
  }
}

// Fungsi untuk melihat daftar buku dalam perpustakaan
function lihatDaftarBuku() {
  console.log("Daftar Buku dalam Perpustakaan:");
  for (let buku of perpustakaan) {
    console.log(`Judul: ${buku.judul}`);
    console.log(`Penulis: ${buku.penulis}`);
    console.log(`Tahun Terbit: ${buku.tahunTerbit}`);
    console.log(`Jumlah Salinan: ${buku.jumlahSalinan}`);
    console.log(`Nilai Buku: ${buku.nilaiBuku}`);
    console.log("----------------------");
  }
}

// Fungsi untuk mengupdate informasi buku berdasarkan judul
function updateInformasiBuku(judul, informasiBaru) {
  const buku = perpustakaan.find(item => item.judul === judul);
  if (buku) {
    Object.assign(buku, informasiBaru);
    console.log(`Informasi buku "${judul}" telah diperbarui.`);
  } else {
    console.log(`Buku "${judul}" tidak ditemukan dalam perpustakaan.`);
  }
}

// Fungsi untuk menghitung total nilai buku di perpustakaan
function hitungTotalNilaiBuku() {
  const totalNilai = perpustakaan.reduce((total, buku) => total + buku.nilaiBuku, 0);
  console.log(`Total Nilai Buku di Perpustakaan: ${totalNilai}`);
}

// Menjalankan program
tambahBuku("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997, 5, 200);
tambahBuku("To Kill a Mockingbird", "Harper Lee", 1960, 3, 150);
tambahBuku("The Great Gatsby", "F. Scott Fitzgerald", 1925, 2, 180);
lihatDaftarBuku();
hapusBuku("To Kill a Mockingbird");
lihatDaftarBuku();
updateInformasiBuku("The Great Gatsby", { jumlahSalinan: 4 });
hitungTotalNilaiBuku();
