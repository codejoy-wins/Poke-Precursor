function lengthInt(x){
    if (x < 0){
        x *= -1;   // if x is negative make it positive to check for length
    }
    var len = 1;   // single digit number has length of 1.
    while (x > 0){
        if(x <= 9){
            return len  // return length if x is single digit.
        }else{
            x = x/10;  // otherwise divide by 10 and add 1 to length so we get number of tens in x
            len+=1;
        }
    } // number of tens == length of int
}
console.log(lengthInt(56));
console.log(lengthInt(5426));
console.log(lengthInt(23429842));
console.log(lengthInt(-424));
console.log(lengthInt(-1000));
console.log(lengthInt(1000));

