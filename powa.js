function pow (x, y){
    for (var i= 0; i < y; i++){
        console.log("inner loop");
        x *= x;
    }
    console.log(x);
    return x;
}

// pow(2,4);
pow(2,4);