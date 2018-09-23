function prime(n){
    // console.log("***"+"checking if " + n+ " is prime");
    var arr = [];
    for(var i =2; i <n; i++){
        arr.push(n%i);
    }
    // console.log(arr);
    return (!arr.includes(0));
}
// var primes = [1,2,3,5,7,11,13,17,];
// console.log(prime(7));  // return yes
// console.log(prime(4)); // return no
// console.log(prime(47)); // return no
// console.log(prime(91)); // return no
// console.log(prime(2)); // return YES
// console.log(prime(1)); // return YES

// calculate highest prime
var key = "LSDKFJ:LSKDFJ:LKDSJF";
var buckets = {single: [], double: [], triple:[], quadruple:[], quintuple:[]};
function highestPrime(){
    for(var i = 1; i < 100000; i++){
        if(prime(i) == true){
            console.log(i);
            if(i<10){
                buckets.single.push(i);
            }
            else if(i<100){
                buckets.double.push(i);
            }
            else if(i<1000){
                buckets.triple.push(i);
            }
            else if(i<10000){
                buckets.quadruple.push(i);
            }
            else if(i<100000){
                buckets.quintuple.push(i);
            }
        }
    }
    console.log(buckets);
    for (let x in buckets){
        console.log(buckets[x].length);
    }
}
highestPrime();
// how many singl digit primes are there?  double digit?  triple? quadruple?

// a prime number cannot be divisable by 2
// a prime number cannot be divisable by 3
// a prime number cannot be divisable by 4
// cannot be divisable by 2 up to n
// push n%i to array then check if that array contains any zeros. if so not prime