console.log("Hello, World!");


/*
	***Chapter 1 : Good Parts 

	Every Language comes with its good and bad parts. We should try to focus on using only the good parts and avoid the bad. 

	We can become better programers by defining your subset of good parts. 

	Why Javascript? 
	JS is the language of the web browser. It is a language with enormous expressive power. 

	Analyzing Javascript

	The good: 
	Functions: JS functions are first class objects with lexical scoping. 

	Loose Typing: Other languages have strong typing but that doesn’t mean that it eliminates the need for careful testing. Loose typing allows for us to not have to worry about the typing system.

	Dynamic Objects and Expressive Object Literal Notation: Objects are simply created by listing their components. 

	JS prototypal nature is a plus. This is where object can inherit properties directly from other objects. 

	The bad: 
	A programming model based on global variables. 

	***Chapter 2 : Grammer

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

	Question: Can we talk about expression statment diagram? I have no clue... 
r
	EXPRESSIONS
	
	Qustion: Can someone give me an example, or explain how a ternary operator works? 

	Its just short hand for if else.
	*/

	if(userIsYoungerThan21) {
	  serveGrapeJuice();
	}
	else {
	  serveWine();
	}

	userIsYoungerThan21 ? serveGrapeJuice() : serveWine();

	/*

	Question: What is the invocation operator in JS? ()
	Question: What does refinement used for in JS?  . & []

	Specifies a property or element of object or array. 

	**Chapter 3 : Objects

	Question: Can someone give me an example of mutable vs immutable?  

	https://gist.github.com/sean-roberts/5710852

	Question: Can someone explain the difference between [] and . when it comes to objects and retrieval? Which is perfered? 

	REFERENCE
	Question: How are the below objects different? 
	*/

	var a = {}, b = {}, c = {};
	       // a, b, and c each refer to a
	       // different empty object
	   	a = b = c = {};
	       // a, b, and c all refer to
	       // the same empty object

	/*

	PROTOTYPE

	Question: What are constructors and prototypes again? 

	REFLECTION

	Question: What does hasOwnProperty do? Does it look at the prototype chain? 
	Returns true if the object has a particular property. no.

	FUNCTIONS
	Question: What the heck are anonymous functions? 

	INVOCATION
	If there are too many argument values, the extra argument values will be ________. If there are too few argument values, the _________ value will be substituted for the missing values. 
	ignored, undefined

	OOP
	https://softwareengineering.stackexchange.com/questions/34584/how-to-explain-oop-concepts-to-a-non-technical-person

*/ 


