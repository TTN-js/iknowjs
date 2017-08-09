// var input = [1,2,3,4,5];


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
// function pickIndex(array, index){
// 	if(Array.isArray(array)){
// 		if(typeof index == "number"){
// 			console.log(array[index]);
// 		} else if(index == undefined) {
// 			console.log(array[0]);
// 		}
// 	} else {
// 		console.log("input is not an array");
// 	}
// }

// pickIndex(input);

// get last element of an array
// function last(input, n){
// 	if(input == null)
// 		// this will return as undifined
// 		return void 0; 
// 	if(n == null)
// 		return array[input.length -1]
// 	return input.slice(Math.max(input.length - n, 0))
// }

// console.log(last([7, 9, 0, -2], 3)); 

// join all elments of array as string

var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
