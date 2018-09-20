function maximumcount(r){
    var max = r[0];
    var count = 0;
    for (var i =1; i < r.length; i++){
        if (r[i] > max){
            max = r[i];
        }
    }
    for (var i = 0; i < r.length; i++){
        if(r[i] == max){
            count += 1;
        }
    }
    return count;
}
var dog = [12,34,55,23,11,12];
var cat = [12,23,23,23,11,12];

console.log(maximumcount(cat));