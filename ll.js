function SLList(){
    this.head = null;
}
function SLNode(val){
    this.val = val;
    this.next = null;
}
var list1 = new SLList();
SLList.prototype.addToFront = function(val){
    if(this.head == null){
        var gnu = new SLNode(val);
        this.head = gnu;
    }else{
        var temp = this.head;  // temp is the old node
        var gnu = new SLNode(val);
        this.head = gnu;
        gnu.next = temp;
    }
    //  h --
    //  h -- 7
    //  h --  14 --  4  --  7
}
SLList.prototype.report = function(){
    var runner = this.head;
    var special = ["head ->"];
    while(runner){
        special.push(runner.val);
        special.push("--->");
        runner = runner.next;
    }
    console.log(special);
    console.log(this.head.val, 'head.val');
    console.log(this.head.next.val, 'head.next.val');
}
list1.addToFront(7);
list1.addToFront(4);
list1.addToFront(14);

list1.report();
// yes

// remove dupes   reverse list
// remove val