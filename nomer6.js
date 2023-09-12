const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function adalahGenap(angka) {
    return angka % 2 === 0;
  }
  
  // Contoh penggunaan fungsi
  console.log(adalahGenap(4)); // Output: true
  console.log(adalahGenap(7)); // Output: false
  console.log(adalahGenap(0)); // Output: true
  