var cheese = [13,13,1,14,1413,132,12];
var x = cheese.map(x=>x*3);
// console.log(x);s

var m = cheese.map((m%2==0) ? m=> m*5 : m=>m*2);
console.log(m);

    // predicate ? true_result : false_result