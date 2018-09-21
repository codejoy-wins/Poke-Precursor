function median (r){
    for (var i in r){
        console.log(r[i]);
    }
}
// median([-4,-2,-5,-1,-6,-2,-4,-6,-1,-7,-34]); // return 4
// sort
//     [1,1,2,2,4,4,5,6,6,7,34]  return 4

//  [1,2,4,6,8,9]  6l  /2 = 3  r[3] == 6  r [2] == 4  avg = 5;

// step one = mergesort
// step two = check length of r
// step three = if r is odd, divide by 2 and take floor.  if r is even, divide by 2 // avg of that and one before

// stay sharp marines.

function mergesort(r){
    console.log("mergesorting", r);
    if (r.length <= 1){
        return r;
    }
    var middle = Math.floor(r.length/2);
    console.log(r[middle], "mid");
    var left = r.slice(0, middle);
    var right = r.slice(middle, r.length);
    console.log(left, "left");
    console.log(right, "right");
    return merge(mergesort(left),mergesort(right));
}
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
            // if(right[r] == undefined){
            //     console.log("Error");
            //     console.log(r, right.length);
            //     r = 0;
            //     // crash
            // }
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
// function merge(left,right){
    
//     console.log("merging");
//     console.log(left, "left for merge");
//     console.log(right, "right for merge");
//     if(left.length == 1 && right.length == 1){
//         var min =left[0];
//         var max = left[0];
//         if(left[0]<right[0]){
//             min = left[0];
//             max = right[0];
//         }else{
//             min = right[0];
//             max = left[0];
//         }
//         var ans = [];
//         ans.push(min,max);
//         console.log(ans);
//     }
//     if(right == undefined){
//         console.log("error");
//         return;
//     }
//     var ans = [];
//     var k =0;
//     var z = 0;
//     var u = 0;
//     while(z < right.length && u < (left.length+right.length)){
//         if(left[k] == undefined){
//             left[k] = Infinity; // I'm infinite
//         }
//         if(right[z]<= left[k]){
//             ans.push(right[z]);
//             z++;
//         }else{
//             ans.push(left[k]);
//             k++;
//         }
//         u++;
//     }
//     // for (var i in right){
//     //     if(right[i]<= left[k]){
//     //         ans.push(right[i]);
//     //     }else{
//     //         ans.push(left[k]);
//     //         k++;
//     //     }
//     // }
//     // i = i-1;
//     // for (var x = i; x < right.length; x++){
//     //     ans.push(right[x]);
//     // }

//     console.log(ans, "ans");
// }

// left out 5.  something going wrong in merge

mergesort([-4,-2,-5,-1,-6,-2,-4,-6,-1,-7,-34]);

// merge([2,3,5], [1,7,9]);  // return 1,2,3,5,7,9

// merge([4],[2]);
// merge([3],[7]);
