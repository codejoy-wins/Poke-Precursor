function loggy(n){
    var lig = Math.log10(n);
    console.log(lig);
    return Math.log10(n)+1;
}
console.log(loggy(1000));