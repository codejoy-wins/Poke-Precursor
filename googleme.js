//Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.

// list of sets
	// set that is least similar 
	// number of entries that are in common
	// any number of sets
	// arrays
// score -- evaluate similarity

// I want to record a score of duplicates for each possible removal
// then return the removal with the highest score.
// modularize with helper function
	// removal functions

// strategy : 
// create multiple functions
	// use master object that keeps track of duplicates and master array
// evaluate each array based on similarity of master array
// pass through the master object into each call of the evaluating function that evaluates how many dupes it has of values in master array
// so the inner function is going to push to master array the current val it's iterating on, but if it is already contained in the array, it's going to dupe++;
// then after iterating through them all, check which array contributes the least amount of similarity or dupes.  If dupes generated from a specific array is 0, that's your answer.  I could make an obj tracking the dupes for each array with their index, and then remove the array at that index where the value of dupes is the minimum. 

	// curious if there's a smarter way to solve this but it can be done
    function main(arr){
        var master = {
            master_arr : [],
            dupes : 0,
            dupelist : [],
            current_i : 0,
        }
        
        for(var i =0; i < arr.length; i++){
            helper(arr[i], master);
            master.current_i++;
        }
        console.log("helper's dupes are: ", master.dupes);
        console.log(master.dupelist, "is the final dupelist");
        var newarr =[];
        for(var i =0; i < master.dupelist.length; i++){
            newarr.push(master.dupelist[i][1]);
        }
        console.log(newarr, "should be an array of currdupes");
        var min = newarr[0];
        for(var i=0; i < newarr.length; i++){
            if (min > newarr[i]){
                min = newarr[i];
            }
        }
        console.log(min);
        var guilty = [];
        for(var i =0; i < master.dupelist.length; i++){
            if(master.dupelist[i][1] == min){
                console.log("one of guilty arrays: ", master.dupelist[i][0]);
                guilty.push(master.dupelist[i][0]);
            }
        }
        var close = guilty.pop();
        console.log(close);
        console.log(arr);
        var final_arr = [];
        for(var i=0; i<arr.length; i++){
            if(i != close){
                final_arr.push(arr[i]);
            }
        }
        console.log(final_arr, "final answer");
    }
    function helper(current_arr, master){   // master is an obj
        console.log(master.master_arr, "is master array");
        console.log(current_arr, "is current array");
    // I'm confused about how to return the master array back into the original function
        var curr_dupes = 0;
        for(var i =0; i < current_arr.length; i++){
            if(master.master_arr.includes(current_arr[i])){
                master.dupes++;
                curr_dupes++;
            }else{
                master.master_arr.push(current_arr[i]);
            }
        }
        console.log(curr_dupes, " is current dupes");
        console.log(master.current_i, " is current i");
        var tp = [master.current_i, curr_dupes];
        master.dupelist.push(tp);
        // console.log(master.master_arr);

        console.log(master.dupelist[master.current_i], "huh?");
        console.log(master.dupelist);
        console.log(master);


        return (master);  // return master obj
    }
    var data = [['a','b','c'],['b','a','c'],['e','f','k'], ['b','z','c']];
    // should return [['a','b','c'],['b','a','c'],['b','z','c']]  and exclude ['e','f','k']
    main(data);
    var data2 = [['z','q','r'],['z','b','t'],['b','f','q'], ['l','o','j']];
    main(data2);
    // at some point I have to remove each array and calculate number of dupes

    //caveats -- the data must be sets which are defined as unique lists.  No repetition per list.  

    // this is based off of the first array... the first array is immune to duplicates because it has nothing to compare to.


    // I think this was a hard but fun interview question and I knew it was one I'd solve in the middle of the night.

    // Thank you, Nathan, for the interview.  