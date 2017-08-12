console.log("Hello, World!");


/*
	Chapter 2 : Grammer

	WHITESPACE can be considered as:
	- a space
	-	a tab
	-; a line end

	COMMENTS - should be used liberaly, to increase readability of code. 
	There are two types of comments in JavaScript:
	- Comment blocks, what we are writting in now
	- Line ending comments which start with // 
	* Line ending comments are recommended over comment blocks.

	Question: What is recommended? Comment blocks or Line ending comments? 

	Javascript Reserved Words 
	- abstract
    - boolean break byte
    - case catch char class const continue
    - debugger default delete do double
    - else enum export extends
	- false final finally float for function
	- goto
 	- if implements import in instanceof int interface
	- long
	- native new null
	- package private protected public
	- return
	- short static super switch synchronized
	- this throw throws transient true try typeof
	- var volatile void
	- while with

	Question: Can you give me an example of a Javascript Reserved Word? 

	NAMES
	Question: Is 2nd_input a viable name for a variable? 

	NUMBERS 
	Intergers 
	Fractions
	Exponents

	NaN is a Number value that is a result of an operation that cannot produce a normal result. NaN is not equal to any value including itself. 

	isNaN(number) is how you detect NaN

	Question: How do you detect NaN? 

	Question: What will the below console.log return? True or False? 

	*/
	var notANumber = NaN;

	console.log(notANumber === NaN);
	/*

	Question: What does Math.Floor(number); do? 
	Rounds the number downward. 

	*/
	Math.floor( 45.95); //  45
	Math.floor( 45.05); //  45
	Math.floor(  4   ); //   4
	Math.floor(-45.05); // -46 
	Math.floor(-45.95); // -46
	/*

	STRINGS
	Question: Will this return True or False? 

	*/ 

	console.log('c' + 'a' + 't' === 'cat');

	/*

	This is because two strings containing exactly the same characters in the same order are considered to be the same string. 

	STATEMENTS

	Question: When inside of a function, the var statment defines the functions private variables. What is this known as? 

	Question: What are Javascritps conditional statments? (if & switch)
	Question: What are Javascript looping statments? (while, for, do)
	Question: What are Javascript disruptive statments? (break, return, and throw)

	*/
	// not really sure what this does.... 
	{"hihi"}

	/*
	
	Falsy values:
	- false
	- null 
	- undefined 
	- empty string ''
	- the number 0
	- the number NaN

	Truthy values:
	- true
	- 'false'
	- all objects


	EXPRESSIONS

*/ 


