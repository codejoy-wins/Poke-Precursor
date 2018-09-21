function queue(r){
    this.data = r;
}
queue.prototype.isEmpty = function(){
    console.log("***********")
    if(this.data.length ==0){
        console.log("r is empty");
    }else{
        console.log("r is not empty");
    }
    return this;
}
queue.prototype.front = function(){
    console.log("front: "+ this.data[0]);
    return this;
}
queue.prototype.enque = function(val){
    console.log(this.data);
    console.log("enquing " + val);
    console.log("adding to back");
    this.data[this.data.length] = val;
    console.log(this.data);
    return this;
}
queue.prototype.deque = function(){
    console.log("dequing from front");
    console.log(this.data);
    deletion = this.data[0];
    console.log(this.data.length);
    console.log("delete: "+deletion);
    //delete here  [1,2,3] --> [2,3]
    for(var i =0; i < this.data.length; i++){
        this.data[i] = this.data[i+1];
    }
    this.data.pop();
    console.log(this.data);
    return this;
}
var list = [1,2,4,2,52,4,34];
var emptylist = [];
var peach = new queue(list);
var pear = new queue(emptylist);

peach.isEmpty().front().enque(333).front().deque();
pear.isEmpty().front().enque(444).isEmpty().front().deque().isEmpty();