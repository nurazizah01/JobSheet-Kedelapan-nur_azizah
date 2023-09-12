// Inisialisasi data awal
let menu = [
    { id: 1, nama: "ayam bakar", harga: 25000 },
    { id: 2, nama: "Mie Ayam", harga: 15000 },
    { id: 3, nama: "Ayam pangggang", harga: 20000 },
    { id: 4, nama: "nasi lemak", harga: 22000 }
  ];
  
  let stokBahan = {
    beras: 20,
    mie: 20,
    ayam: 10
  };
  
  let pesanan = [];
  let totalPembayaran = 0;
  
  // Fungsi untuk menampilkan menu
  function tampilkanMenu() {
    console.log("Menu Restoran:");
    for (let item of menu) {
      console.log(`${item.id}. ${item.nama} - Rp. ${item.harga}`);
    }
  }
  
  // Fungsi untuk menambahkan pesanan
  function tambahkanPesanan(id, jumlah) {
    const menuItem = menu.find(item => item.id === id);
    if (!menuItem) {
      console.log("Menu tidak ditemukan.");
      return;
    }
  
    if (stokBahan[menuItem.nama.toLowerCase().replace(" ", "")] < jumlah) {
      console.log("Stok bahan habis.");
      return;
    }
  
    pesanan.push({ nama: menuItem.nama, harga: menuItem.harga, jumlah: jumlah });
    console.log(`Pesanan ${menuItem.nama} (${jumlah} porsi) telah ditambahkan.`);
    stokBahan[menuItem.nama.toLowerCase().replace(" ", "")] -= jumlah;
  }
  
  // Fungsi untuk menghitung total pembayaran
  function hitungTotalPembayaran() {
    totalPembayaran = pesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);
  }
  
  // Fungsi untuk menampilkan riwayat pesanan
  function tampilkanRiwayatPesanan() {
    console.log("Riwayat Pesanan:");
    for (let item of pesanan) {
      console.log(`${item.nama} (${item.jumlah} porsi) - Rp. ${item.harga * item.jumlah}`);
    }
    console.log(`Total Pembayaran: Rp. ${totalPembayaran}`);
  }
  
  // Menjalankan program
  tampilkanMenu();
  tambahkanPesanan(1, 2);
  tambahkanPesanan(2, 3);
  hitungTotalPembayaran();
  tampilkanRiwayatPesanan();
  