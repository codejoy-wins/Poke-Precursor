function WinPercentage(w, l){
    return (100*((w/(w+l)).toFixed(4)) + " percent");
}
console.log(WinPercentage(93,85));