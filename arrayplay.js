// var input = [1,2,3,4,5];


// 1. check if input is an array

// function arrayCheck(input) {

// 	console.log(typeof input);

// 	if(Array.isArray(input)){
// 		console.log("input is an array")
// 	} else {
// 		console.log("input is not an array");
// 	}
// }

// arrayCheck(input);

// 2. clone an array

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

// 3. get element of array
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

// 4. get last element of an array
// function last(input, n){
// 	if(input == null)
// 		// this will return as undifined
// 		return void 0; 
// 	if(n == null)
// 		return array[input.length -1]
// 	return input.slice(Math.max(input.length - n, 0))
// }

// console.log(last([7, 9, 0, -2], 3)); 

// 5. join all elments of array as string

// var myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join("+"));

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.

var input = '123456';

function even(input){
	var splitstring = input.split("");

	// console.log(splitstring);

	for (var i = 0; i < splitstring.length; i++) {
		var string = "";

		if (i%2 == 0){
			string.push "-"+i;
		}else{
			string += i;
		}

		console.log(i);
	}	
	console.log(string);
}

console.log(even(input));