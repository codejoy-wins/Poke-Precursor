function maximum(r){
    var max = r[0];
    for (var i =1; i < r.length; i++){
        if (r[i] > max){
            max = r[i];
        }
    }
    return max;
}
function minimum(r){
    var min = r[0];
    for (var i =1; i < r.length; i++){
        if (r[i] < min){
            min = r[i];
        }
    }
    return min;
}
function removal(r){
    var maxi = maximum(r);
    var mini = minimum(r);
    var sum = 0;
    var summax = 0;
    var summin = 0;
    var other = [maxi, mini];
    console.log("hello");
    console.log(other);
    for(var i in r){
        sum += r[i]; 
    }
    summax = sum - mini;
    summin = sum - maxi;
    var ans = [summax,summin];
    console.log(ans);
    return ans;
}
// removal([4,5,2,6,]); returns [15,11];
var cat = [2,3,4,5,7];
var dog = [12,34,55,23,11,12];
removal(cat);
removal(dog);