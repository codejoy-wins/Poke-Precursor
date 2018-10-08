/*
Divya predicts her investment will have a return of 0.2\%0.2%0, point, 2, percent interest on the last day of each month. Her initial investment is \$100$100dollar sign, 100 on the first of the first month, and she invests another \$100$100dollar sign, 100 on the first day of each month after that.
According to her prediction, what would Divya's investment be worth at the end of the first day of the 48^\text{th}48 
th
 48, start superscript, t, h, end superscript month?
Round your final answer to the nearest dollar.
\$
*/

//   s(n) = a1((1-r^n)/(1-r))

function geo (a1, r, n){
    // x = y(a/b)
    var y = a1;
    var z = Math.pow(r,n);
    var a = 1-z;
    var b = 1-r;
    var x = y*(a/b);
    var ans = Math.round(x);
    console.log(`answer is: ${ans}`); // backtick interpolation
    return ans;
}
geo(100, 1.002, 48); // returns 5033