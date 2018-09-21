function nthLargestUniqueNumber(arr,n){
    for (var x = 0; x < (n-1); x++){
            max = arr[0];
        for (var i = 0; i < arr.length; i++){
            if (max < arr[i]){
                max = arr[i];
            }
        }
        var arrnew = [];
        for (var i = 0; i < arr.length; i++){
            if (arr[i] != max){
                arrnew.push(arr[i]);
            }
        }
        max = arrnew[0];
        for (var i = 0; i < arrnew.length; i++){
            if (max < arrnew[i]){
                max = arrnew[i];
            }
        }
        console.log('The',x+2,'largest is: ', max);
        arr = arrnew;
    }
    return max;
}
    

console.log(nthLargestUniqueNumber([32,23,533,87,117,42],4));