/*
   What is Recursion? 
   To put it simple, recursion is when a function calls itself. 

   Three key features of recursion:
   1. A termination condition, where the function terminates if there is an error
   2. A base case, another termination condition once we reached our goal
   3. Recursion, when our function calls itself

   returns the factorial of a supplied integer:
   Whats a factorial? 
   To get the factorial of a number you multiply that number by itself minus one until you reach the number one.
   ex. factorial of 4 is 4*3*2*1 = 24
*/

function factorial(x) {
	// TERMINATION
	if (x < 0) 
  		return;
  	// BASE CASE
  	if (x === 0) 
  		return 1;
  	// RECURSION
  	return x * factorial(x - 1);
}

console.log(factorial(3));

/*
	this is how the above function works:

	this function runs as many times it needs to until it reaches 0
	so if the input is 3, 3*2*1*1 = 6, once x becomes 0 then the functions stops via return.
	
	factorial(0) returns 1                 => 1
	factorial(1) returns 1 * factorial(0)  => 1 * 1
	factorial(2) returns 2 * factorial(1)  => 2 * 1 * 1
	factorial(3) returns 3 * factorial(2)  => 3 * 2 * 1 * 1

	3 * 2 * 1 * 1 = 6

*/

/*
	inefficient recursive reversing string


*/

function revStr(str){
	// BASE CASE & TERMINATION
  	if (str === '') 
  		return '';
  	// RECURSION
  	return revStr(str.substr(1)) + str[0];
}

/*
	revStr('')     returns                ''  => ''

	revStr('t')    returns revStr('') +   't' => '' + 't'

	revStr('at')   returns revStr('t') +  'a' => '' + 't' + 'a'

	revStr('cat')  returns revStr('at') + 'c' => '' + 't' + 'a' + 'c'

	tac
*/

console.log(revStr('cat'));
