// turn string into integer

function stringToInt(s){
    var collection = [];
    for (x in s){
        var test = 2 * s[x];
        if (Math.abs(test) >= 0){
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
    // where the magic happens
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