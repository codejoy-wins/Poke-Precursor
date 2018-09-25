// MY FIRST HASH TABLE
// start off with constructor
var hasherRoth = function(){
    this.storage = [];
}

hasherRoth.prototype.report = function (){
    console.log(this.storage);
    return this;
}
// add prototypes for hashfunction and add.
hasherRoth.prototype.hashFunc = function(key){
    //seems like reduce
    var hash = 0;  // why is it 0?
    for(var i =0; i < key; i++){
        hash += key.charCodeAt(i);  // unicode...
    }
    return hash;
}
// add function is going to add the key value pair into storage
hasherRoth.prototype.add = function(key,value) {
    var index = hasherRoth(key); // hash the key based on our storage
    var bucket = this.storage[index]; // for multiple values?

    if(!bucket){ // if there's no bucket then create one
        var bucket = [];
        bucket.push([key,value]);
        this.storage[index] = bucket;
        return;
    }

    var exists = false; //??  prevent confusing key value pairs

    for(var i =0; i < bucket.length; i++){
        var pair = bucket[i];

        if (pair[0] === key){
            pair[1] = value;
            exists = true;
        }
    }

    if (!exists) {
        var duo = [key,value];
        bucket.push([key,value]);
    }

    this.storage[index] = bucket;
    return this;
}
hasherRoth.prototype.remove = function(key){

}

var ht = new hasherRoth();
ht.add("pikachu", "thunderbolt");
ht.add("charizard", "flamethrower");
ht.report();
console.log(ht.storage);
console.log(ht.storage.length);

ht.add(1, "Charlene");
ht.add(2,"Moxi");
ht.report();
console.log(ht.storage.length);