const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function adalahBilanganPrima(angka) {
    // Bilangan prima adalah bilangan bulat positif yang lebih besar dari 1
    if (angka <= 1) {
      return false;
    }
  
    // Cek apakah angka lebih besar dari 2 dan habis dibagi oleh bilangan lain selain 1 dan dirinya sendiri
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        return false;
      }
    }
  
    // Jika tidak ada bilangan yang dapat membagi habis angka selain 1 dan dirinya sendiri, maka angka adalah prima
    return true;
  }
  
  // Contoh penggunaan fungsi
  console.log(adalahBilanganPrima(5)); // Output: true
  console.log(adalahBilanganPrima(9)); // Output: false
  console.log(adalahBilanganPrima(11)); // Output: true
  