// cant even merge

function merge(left,right){
    console.log("merging");
    console.log(left, "left");
    console.log(right, "right");
    var l = 0;
    var r =0;
    var output = [];
    var winner = right[r];
    while(r< right.length && l < left.length){
        console.log("comparing " + right[r] + " to " + left[l]);
        if(left[l] == undefined){
            console.log("left undefined");
            for(var i = r; i< right.length; i++){
                output.push(right[i]);
            }
        }
        if(right[r] == undefined){
            console.log("right undefined");
            for(var i = l; i< left.length; i++){
                output.push(left[l]);
            }
        }
        if(right[r]>left[l]){
            console.log(left[l] + " left is winner");
            output.push(left[l]);
            l++;
            console.log("left[l] is now: " + left[l] );
    
        }else{
            console.log(right[r] + " right is winner");
            output.push(right[r]);
            r++;
            console.log("right[r] is now: " + right[r] );
        }
    }
    console.log(l, left.length);
    console.log(r, right.length);
    while (r < right.length){
        output.push(right[r]);
        r++;
    }
    while (l < left.length){
        output.push(left[l]);
        l++;
    }
    console.log(output);
}
// var cat = [1,4,26,7,6,9,10,4]; // 1, 4, 4, 6 , 7, 9, 10, 26
// var dog = [3,33,123,2,13];  //  2, 3, 13, 33, 123
// var sortedcat = [1,4,4,6,7,9,10,26];
// var sorteddog = [2,3,13,33,123];
// merge(sortedcat,sorteddog);
// merge(sorteddog,sortedcat);
