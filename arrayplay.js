var input = [1,2,3,4,5];


// check if input is an array

// function arrayCheck(input) {

// 	console.log(typeof input);

// 	if(Array.isArray(input)){
// 		console.log("input is an array")
// 	} else {
// 		console.log("input is not an array");
// 	}
// }

// arrayCheck(input);

// clone an array

// function clone_array(input){
// 	if(Array.isArray(input)){
// 		console.log(input.slice(0));
// 		// console.log(input);
// 	} else {
// 		console.log("input is not an array");
// 	}
// }

// // slice always returns a new array - the array returned by slice(0) is identical to the input, which basically means it's a cheap way to duplicate an array.

// clone_array(input);

// get element of array
function pickIndex(array, index){
	if(Array.isArray(array)){
		if(typeof index == "number"){
			console.log(array[index]);
		} else {
			console.log("index does not exsist");
		}
	} else {
		console.log("input is not an array");
	}
}

pickIndex(input,3);