const readline =require('readline');
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function perhitungnpanjangstring(inputstring){
    var panjang = inputstring.length;
    return panjang;
}
var jumlahkarakter ="ungu";
var panjangstring = perhitungnpanjangstring(jumlahkarakter);
console.log("panjang string adalah:" + panjangstring)