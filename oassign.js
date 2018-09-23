var arr = [1,,,,2,3,4,,5,6,,7];
console.log(arr.length);
for (let i in arr){
    console.log(i, arr[i]);
}
for(var i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
    if(arr[i] == undefined){
        arr[i] = 0;
    }
}

console.log(arr);