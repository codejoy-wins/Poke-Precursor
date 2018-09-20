function palindrone(z){
    if(z == reverse(z)){
        console.log(z, " is a palindrone.");
        return true;
    }else{
        console.log(z, "is not a palindrone.");
        return false;
    }
}

function reverse(x){
    if(typeof(x) == "number"){
        x = x.toString();
    }
    var ans = "";
    for(var i = x.length-1; i >= 0; i--){
        ans+=x[i];
    }
    return ans;
}
reverse("fire");
reverse(24);

palindrone("racecar");
palindrone(454);
palindrone(423);
palindrone("johnny");