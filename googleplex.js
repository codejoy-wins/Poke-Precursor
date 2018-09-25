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
		master_arr = [],
		dupes = 0,
	}
	for(var i =0; i < arr.length; i++){
		helper(arr[i], master_arr);
	}
}
function helper(current_arr, master){   // master is an obj
	console.log(master, "is master array");
	console.log(current_arr, "is current array");
// I'm confused about how to return the master array back into the original function
	for(var i =0; i < current_arr.length; i++){
		if(master.master_arr.includes(arr[i])){
			master.dupes++;
		}else{
			master.master_arr.push(arr[i]);
		}
	}
	return (master);  // return master obj
}


main(data);