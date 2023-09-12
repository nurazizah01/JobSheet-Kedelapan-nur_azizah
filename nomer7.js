const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


function gabungString(string1, string2) {
    return string1 + string2;
  }
  
  // Contoh penggunaan fungsi
  const hasilGabungan = gabungString("freen, ", "azizah!");
  console.log(hasilGabungan); // Output: "Halo, dunia!"
  