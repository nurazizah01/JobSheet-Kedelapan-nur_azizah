const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function perkalian(angkapertama,angkakedua){
    var hasil =angkapertama*angkakedua;
    return hasil;
}

var angka1 =25;
var angka2 =22;
var hasilperkalian =perkalian(angka1,angka2);
console.log("hasil perkalian:" + hasilperkalian);