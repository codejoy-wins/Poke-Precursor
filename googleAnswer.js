// remove set from list of sets that is least similar to all other sets
// using duplicate recording based off first set
    function main(arr){
        console.log("OG array", arr);
        var master = {       // master object for helper function to use
            master_arr : [],  // how duplicates are found
            dupes : 0,      // duplicates
            dupelist : [],  // keeping tack of duplicates with their indexes too
            current_i : 0,  // counter
        }
        
        for(var i =0; i < arr.length; i++){  // for each set, run the helper function with the master parameter and increment count
            helper(arr[i], master);
            master.current_i++;
        }
        // console.log("helper's dupes are: ", master.dupes);
        // console.log(master.dupelist, "is the final dupelist");
        var newarr =[];
        for(var i =0; i < master.dupelist.length; i++){
            newarr.push(master.dupelist[i][1]);
        }
        // console.log(newarr, "should be an array of currdupes");
        var min = newarr[0];
        for(var i=0; i < newarr.length; i++){
            if (min > newarr[i]){
                min = newarr[i];
            }
        }
        // console.log(min);
        var guilty = [];
        for(var i =0; i < master.dupelist.length; i++){
            if(master.dupelist[i][1] == min){
                // console.log("one of guilty arrays: ", master.dupelist[i][0]);
                guilty.push(master.dupelist[i][0]);
            }
        }
        var close = guilty.pop();  // using pop to get a guilty array that isn't the first
        // console.log(close);
        // console.log(arr);
        var final_arr = [];
        for(var i=0; i<arr.length; i++){
            if(i != close){
                final_arr.push(arr[i]);
            }
        }
        console.log(final_arr, "final answer");
    }
    function helper(current_arr, master){   // master is an obj
        // console.log(master.master_arr, "is master array");
        // console.log(current_arr, "is current array");
        var curr_dupes = 0;
        for(var i =0; i < current_arr.length; i++){
            if(master.master_arr.includes(current_arr[i])){
                master.dupes++;
                curr_dupes++;
            }else{
                master.master_arr.push(current_arr[i]);
            }
        }
        // console.log(curr_dupes, " is current dupes");
        // console.log(master.current_i, " is current i");
        var tp = [master.current_i, curr_dupes];
        master.dupelist.push(tp);
        // console.log(master.master_arr);
        // console.log(master.dupelist[master.current_i], "huh?");
        // console.log(master.dupelist);
        // console.log(master);
        return (master);  // return master obj
    }
    var data = [['a','b','c'],['b','a','c'],['e','f','k'], ['b','z','c']];
    // should return [['a','b','c'],['b','a','c'],['b','z','c']]  and exclude ['e','f','k']
    // main(data);
    var data2 = [['z','q','r'],['z','b','t'],['b','f','q'], ['l','o','j']];
    // main(data2);
    var data3 = [['a','j','k'],['m','k','u'],['b','f','d'], ['h','t','j']];
    // main(data3);
    var data4 = [['a','b','c'],['b','a','c'],['e','f','k'], ['b','z','c'],['z','q','r'],['z','b','t'],['b','f','q'], ['l','o','j'],['a','j','k'],['m','k','u'],['b','f','d'], ['h','t','j']];
    main(data4);
    //caveats -- the data must be sets which are defined as unique lists.  No repetition per list.  

    // this is based off of the first array... the first array is immune to duplicates because it has nothing to compare to.

    // I think this was a hard but fun interview question and I knew it was one I'd solve in the middle of the night.

    // Thank you, Nathan, for the interview.  

    // if I'm basing it off the first one not getting thrown out, I could maybe do a separate check for the first one being thrown out by using shift() instead of pop(), but I would have to keep track of the values and compare.
    // This really is a tricky question.  The dupes have to be based off of something, so I might have to run the whole process for each item in the OG array!  Then find the minimum of all the minimums.  That's so many for loops! lol.