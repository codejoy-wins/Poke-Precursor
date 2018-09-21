// turn string into integer

function stringToInt(s){
    var collection = [];
    for (x in s){
        var test = 2 * s[x];
        console.log(s[x]);
        console.log(test);
        if (Math.abs(test) >= 0){
            console.log("real number");
            console.log(s[x], "real s[x]");
            // here goes nothing
            collection.push(s[x]);
        }else{
            console.log("FAIL");
            return;
        }
    }
    console.log(collection);
    var ans = 0;
    var runner = 1;
    for (var i =collection.length-1; i >= 0; i--){
        ans += collection[i]*runner;
        runner = runner *10;
    }
    console.log(ans);
}
stringToInt("happy");
stringToInt("24");
stringToInt("483");
// sup playas