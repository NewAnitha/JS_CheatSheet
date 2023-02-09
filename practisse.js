// Variables: Variables in JavaScript are containers for storing data. JavaScript allows the usage of variables in the following three ways:

// Variable	Description	Example
// var	var is the most commonly used variable in JavaScript. It can be initialized to a value, redeclared and its value can be reassigned, but only inside the context of a function. It can be function scoped or globally scoped.	var x= value;
// let	let in JavaScript is similar to var only difference lies in the scope. var is function scoped, let is block scoped. It cannot be redeclared but can be reassigned a value.	let y= value;
// const	const in JavaScript is used to declare a fixed value that cannot be changed over time once declared. They can neither be redeclared nor be reassigned. They cannot be hoisted either.	const z= value;


{/* <script> */}
	// Using var keyword
	// console.log("<u>Using var Keyword</br></u>")
	// var x = 1;
	// if (x === 1) {
	// 	var x = 2;
	// 	console.log(x + "</br>"); // Output: 2
	// }
	// console.log(x + "</br>"); // Output: 2
	
	// // Using let keyword
	// console.log("<u>Using let Keyword</br></u>")
	// let x1 = 1;
	// if (x1 === 1) {
	// 	let x1 = 2;
	// 	console.log(x1 + "</br>"); // Output: 2
	// }
	// console.log(x1 + "</br>"); // Output: 1
	
	// // Using const keyword
	// console.log("<u>Using const Keyword</br></u>")
	// const number = 48;

	// // Changing const value will display TypeError
	// try {
	// 	number = 42;
	// } catch (err) {
	// 	console.log(err + "</br>");
	// }
	// console.log(number); // Output: 48
// </script>
// Datatypes: There are different types of values and data that can be stored in JavaScript variables. For the machine to be able to operate on variables, and correctly evaluate the expressions it is important to know about the type of variables involved. There are following primitive and non-primitive datatypes in JavaScript:

// Datatype	Description	Example
// Number	These are just numeric values. They can be real or integers.	var x= number;
// String	It is of series of multiple characters written within double or single quotes.	var x= “characters”;
// Boolean	It can have only two values true or false.	var x= true/false;
// Null	It is a special value that represents that the variable is empty or has an unknown value. it is Equivalent to an empty string or 0.	var x= null;
// Undefined	It represents that the variable is declared but not assigned any value. A variable can also be emptied by setting the value to undefined.	let x; / let x= undefined;
// Object	It is a complex data type that allows us to store a collection of data. It contains properties defined as key-value pair.	
// var x= {

// key: “value”;

// key: “value”;}

// Array	It is a datatype used to store multiple values in a single variable. each value(element) has a numeric position(index) which starts from 0 , and it may contain data of any data type and even other arrays.	
// var x =[‘y1’, ‘y2′,’y3′,’y4’];

// y: any datatype

// Function	In JavaScript all functions are objects that can be called to execute a block of code. Since functions are objects, so it is possible to assign them to variables. They can be stored in variables, objects, and arrays and also can be passed as arguments to other functions and returned from functions.	
// function x(arguments){

// block of code

// }


  // String
  let str = "hello geeks";
  console.log(str + "</br>");
  
  // number
  const num = 10;
  console.log(num + "</br>");
  
  // boolean
  const f = "true";
  console.log(f + "</br>");
  
  // undefined
  let name;
  console.log(name + "</br>");
  
  // null
  const number = null;
  console.log(number + "</br>");
  
  // symbol
  const value1 = Symbol("hello");
  const value2 = Symbol("hello");
  console.log(value1 + "</br>");
  console.log(value2 + "</br>");
  
  // Here both values are different as they
  // are symbol type which is immutable object
  const object = {
    firstName: "geek",
    lastName: null,
    batch: 2,
  };
  console.log(object);
// Operators: JavaScript operators are symbols used to perform various operations on variables (operands). Following are the different types of operators:

// Operators	Description	Symbols
// Arithmetic	Arithmetic operators are used to perform basic arithmetic operations like addition, subtraction, multiplication, division, modulus, increment, and decrement on the variables(operands).	+,-,*,/,%,++,–
// Comparison	The JavaScript comparison operator compares the two operands as equal, not equal, identical, greater than, less than, greater than equal to, less than equal to.	==, ===,!=,>,<,>=,<=
// Bitwise	The bitwise operators perform bitwise operations like bitwise OR, bitwise AND, XOR, NOT, right shift, and left shift on variables(operands).	&, | , ^,~,<<, >>, >>>
// Logical	
// There are three logical operators in javascript.

// logical AND: When all the operands are true.
// logical OR: When one or more than one operands are true.
// logical NOT: Converts true to false.
// exp1&&exp2,exp1 ||exp2, !exp
// Assignment	Assignment operators assign values to JavaScript variables. These are assign, add and assign, subtract and assign, divide and assign, modulus and assign.	=, +=,-=,*=,/=,%=

  let xx = 5;
  let yy = 3;
  
  // Addition
  console.log("xx + y = ", xx + "</br>"); // 8
  
  // Subtraction
  console.log("xx - y = ", xx - yy + "</br>"); // 2
  
  // Multiplication
  console.log("xx * y = ", xx * yy + "</br>"); // 15
  
  // Division
  console.log("xx / y = ", xx / yy + "</br>");
  
  // Remainder
  console.log("xx % y = ", (xx % yy) + "</br>"); // 2
  
  // Increment
  console.log("++xx = ", ++xx + "</br>"); // xx is now 6
  console.log("xx++ = ", xx++ + "</br>");
  console.log("xx = ", xx + "</br>"); // 7
  
  // Decrement
  console.log("--xx = ", --xx + "</br>"); // xx is now 6
  console.log("xx-- = ", xx-- + "</br>");
  console.log("xx = ", xx + "</br>"); // 5
  
  // Exxponentiation
  console.log("xx ** y =", xx ** yy + "</br>");
  
  // Comparison
  
  console.log(xx > yy + "</br>"); // true
  
  // Equal operator
  console.log((2 == 2) + "</br>"); // true
  
  // Not equal operator
  console.log((3 != 2) + "</br>"); // true
  
  // Strict equal operator
  console.log((2 === 2) + "</br>"); // true
  
  // Strict not equal operator
  console.log((2 !== 2) + "</br>"); // true
  
  // Logical operator
  // logical AND
  console.log((xx < 6 && yy < 5) + "</br>"); // true
  
  // logical OR
  console.log((xx < 6 || yy > 6) + "</br>"); // true
  // logical NOT
  console.log(!(xx < 6) + "</br>"); // false
// JS scope and scope chain:

// Scope: Scope defines the accessibility or visibility of variables in JavaScript. That is, which sections of the program can access a given variable and where the variable can be seen. Using scope, we can avoid unintended modifications to the variables from other parts of the program. There are usually three types of scopes:

// Scope chain: The scope chain is used to resolve the value of variable names in JavaScript. Without a scope chain, the JavaScript engine wouldn’t know which value to pick for a certain variable name if there are multiply defined at different scopes. If the JavaScript engine could not find the variable in the current scope, it will look into the outer scope and will continue to do so until it finds the variable or reaches the global scope. If it still could not find the variable, it will either implicitly declare the variable in the global scope (if not in strict mode) or return an error.

// scope	Description
// function	Variables declared inside a function is inside the function scope also known as local scope. Variables function scoped can only be accessed from within that function, which means they can’t be accessed from the outside code.globalThe variables in global scope variables
// global	The variables in global scope can be accessed from anywhere in the program. Any variable that’s not inside any function or block (a pair of curly braces), is inside the global scope.
// block	This scope restricts the variable that is declared inside a specific block, from access by the outside of the block and scopes it to the nearest pair of curly brackets. The let and const keyword introduced in ES6 facilitates the variable to be block scoped.

   let zz=3
   function foo() {
     if (true) {
        var x = '1'; // Exist in function scope
        const y = '2'; // Exist in block scope 
     }
     console.log(x);
     console.log(y);
     console.log(zz); // Exist in global scope
   }
   foo();
// Functions: A JavaScript function is a block of code designed to perform a particular task. It is executed when invoked or called. Instead of writing the same piece of code again and again you can put it in a function and invoke the function when required. JavaScript function can be created using the functions keyword. Some of the functions in JavaScript are:

// Function	Description
// parseInt()	This function is used for parsing the argument passed to it and returning an integral number.
// parseFloat()	This function is used for parsing the argument passed to it and returning a floating-point number.
// isNaN()	This function is used for determining if a given value is Not a Number or not.
// Number()	This function is used for returning a number converted from what is passed as an argument to it.
// eval()	This function is used for evaluating JavaScript programs presented as strings.
// prompt()	This function is used for creating a dialogue box for taking input from the user.
// encodeURI()	This function is used for encoding a URI into a UTF-8 encoding scheme.
// match()	This is an inbuilt function in JavaScript used to search a string for a match against any regular expression.

  // JS parseInt function
  var v1 = parseInt("3.14");
  console.log('Using parseInt("3.14") = ' + v1 + "</br>");
  
  // JS parsefloat function
  // It returns floating point Number until 
  // it encounters Not a Number character
  a = parseFloat("2018@geeksforgeeks");
  console.log('parseFloat("2018@geeksforgeeks") = ' + a + "</br>");
  
  // JS isNAN function
  console.log(isNaN(12) + "<br>");
  
  // JS number() function
  function num() {
    var a = true;
  
    var value = Number(a);
    console.log(value + "</br>");
  }
  num();
  
  // JS eval() function
  function evalfn() {
    var a = 4;
    var b = 4;
    var value = eval(new String(a * b));
    console.log(value + "</br>");
  }
  evalfn();
  
  // JS encode URI function
  const url = "https://www.google.com/search?q=geeks for geeks";
  const encodedURL = encodeURI(url);
  console.log(encodedURL);
// Arrays: In JavaScript, array is a single variable that is used to store different elements. It is often used when we want to store list of elements and access them by a single variable. Arrays use numbers as index to access its “elements”.
// Declaration of an Array: There are basically two ways to declare an array.

// Example: var House = [ ]; // Method 1
// var House = new Array(); // Method 2
// There are various operations that can be performed on arrays using JavaScript methods. Some of these methods are:

// Method	Description
// push()	This method adds a new element at the very end of an array.
// pop()	This method removes the last element of an array.
// concat()	This method joins various arrays into a single array.
// shift()	This method removes the first element of an array
// unShift()	This method adds new elements at the beginning of the array
// reverse()	This method reverses the order of the elements in an array.
// slice()	This method pulls a copy of a part of an array into a new array.
// splice()	This method adds elements in a particular way and position.
// toString()	This method converts the array elements into strings.
// valueOf()	This method returns the primitive value of the given object.
// indexOf()	This method returns the first index at which a given element is found in an array.
// lastIndexOf()	This method returns the final index at which a given element appears in an array.
// join()	This method combines elements of an array into one single string and then returning it
// sort()	This method sorts the array elements based on some condition.

  // Declaring and initializing arrays
  var arr = [10, 20, 30, 40, 50]; // number array
  var arr1 = [110, 120, 130, 140];
  var string_arr = ["Alex", "peter", "chloe"]; // string array
  
  // push: Adding elements at the end of the array
  arr.push(60);
  console.log("After push op " + arr + "</br>");
  
  // unshift() Adding elements at the start of the array
  arr.unshift(0, 10);
  console.log("After unshift op " + arr + "</br>");
  
  // pop: removing elements from the end of the array
  arr.pop();
  console.log("After pop op" + arr + "</br>");
  
  // shift(): Removing elements from the start of the array
  arr.shift();
  console.log("After shift op " + arr + "</br>");
  
  // splice(x,y): removes x number of elements starting from index y
  arr.splice(2, 1);
  console.log("After splice op" + arr + "</br>");
  
  // reverse(): reverses the order of elements in array
  arr.reverse();
  console.log("After reverse op" + arr + "</br>");
  
  // concat(): merges two or more array
  console.log("After concat op" + arr.concat(arr1));
// Loops: Loops are a useful feature in most programming languages. With loops you can evaluate a set of instructions/functions repeatedly until certain condition is reached. They let you run code blocks as many times as you like with different values while some condition is true. Loops can be created in the following ways in JavaScript:

// Loop	Description	Syntax
// for	For statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.	for (initialization condition; testing condition;increment/decrement)
// {
// statement(s)
// }
// while	It in an Entry control loop. It starts with the checking of condition. If it evaluated to true, then the loop body statements are executed otherwise first statement following the loop is executed.	while (boolean condition)
// {
// loop statements…
// }
// do-while	do while loop is similar to while loop with only difference that it checks for condition after executing the statements, and therefore is an example of Exit Control Loop.	do
// {
// statements..
// }
// while (condition);
// for-in	This is another version of for loop used by javascript to provide a simpler way to iterate through the properties of an object. Its very useful while working with objects.	for (variableName in Object)
// {
// statement(s)
// }

  // Illustration of for loop
  var x;
  
  // for loop begins when x=2
  // and runs till x <=4
  for (x = 2; x <= 4; x++) {
    console.log("Value of x:" + x + "<br />");
  }
  
  // Illustration of for..in loop
  // creating an Object
  var languages = {
    first: "C",
    second: "Java",
    third: "Python",
    fourth: "PHP",
    fifth: "JavaScript",
  };
  
  // Iterate through every property of 
  // the object languages and print all
  // of them using for..in loops
  for (itr in languages) {
    console.log(languages[itr] + "<br >");
  }
  
  // Illustration of while loop
  var y = 1;
  
  // Exit when x becomes greater than 4
  while (y <= 4) {
    console.log("Value of y:" + y + "<br />");
  
    // Increment the value of y for next iteration
    x++;
  }
  
  // Illustration of do-while loop
  var z = 21;
  
  do {
    // The line while be printer even if the condition is false
    console.log("Value of z:" + z + "<br />");
  
    z++;
  } while (z < 20);
// If-else: If-else is used in JavaScript to execute a block of codes conditionally. These are used to set conditions for your code block to run. If certain condition is satisfied certain code block is executed otherwise else code block is executed. JavaScript allows us to nest if statements within if statements as well. i.e, we can place an if statement inside another if statement.

// if (condition)
// {
//    // Executes this block if
//    // condition is true
// }
// else
// {
//    // Executes this block if
//    // condition is false
// }

  // JavaScript program to illustrate If-else statement
  var i = 10;
  
  if (i < 15)
  console.log("I am in the if block");
  else
  console.log("I am Not in the if block");
// Strings: Strings in JavaScript are primitive and immutable data types used for storing and manipulating text data which can be zero or more characters consisting of letters, numbers or symbols. JavaScript provides a lot of methods to manipulate strings. Some most used ones are:

// Methods	Description
// concat()	This method is used for concatenating or joining multiple strings into a single string.
// match()	This method is used for finding the matches of a string against a provided pattern string.
// replace()	This method is used for finding and replacing a given text in the string.
// substr()	This method is used to extract length characters from a given string , counting from the start index.
// slice()	This method is used for extracting an area of the string and returning it
// lastIndexOf()	This method is used to return the index (position) of the last occurrence of a specified value in a string. It is case-sensitive and it searches the string from the end to the beginning.
// charAt()	This method is used for returning the character at a particular index of a string
// valueOf()	This method is used for returning the primitive value of a string object. It does not change the original string.
// split()	This method is used for splitting a string object into an array of strings at a particular index
// toUpperCase()	This method is used for converting strings to upper case.
// toLoweCase()	This method is used for converting strings to lower case.

   let gfg = 'GFG ';
   let geeks = 'stands-for-GeeksforGeeks';
     
   // Print the string as it is
   console.log(gfg);
   console.log(geeks + "</br>");
     
   // concat() method
   console.log(gfg.concat(geeks) + "</br>");
     
   // match() method
   console.log(geeks.match(/eek/) + "</br>");
     
   // charAt() method
   console.log(geeks.charAt(5) + "</br>");
     
   // valueOf() method
   console.log(geeks.valueOf() + "</br>");
     
   // lastIndexOf() method
   console.log(geeks.lastIndexOf('for') + "</br>");
     
   // substr() method
   console.log(geeks.str.substr(6) + "</br>");
     
   // indexOf() method
   console.log(gfg.indexOf('G') + "</br>");
     
   // replace() method
   console.log(gfg.replace('FG', 'fg') + "</br>");
     
   // slice() method
   console.log(geeks.slice(2, 8) + "</br>");
     
   // split() method
   console.log(geeks.split('-') + "</br>");
     
   // toUpperCase method
   console.log(geeks.toUpperCase(geeks) + "</br>");
     
   // toLowerCase method
   console.log(geeks.toLowerCase(geeks) + "</br>");
// Regular Expressions: A regular expression is a sequence of characters that forms a search pattern. The search pattern can be used for text search and text to replace operations. A regular expression can be a single character or a more complicated pattern.

// Syntax:

// /pattern/modifiers;
// You can also use regEx() to create regular expression in javascript:

// const regex1 = /^ab/;
// const regex2 = new Regexp('/^ab/');
// Let us look at how JavaScript allows Regular Expressions:

// Regular Expression Modifiers : Modifiers can be used to perform multiline searches. Some of the pattern modifiers that are allowed in JavaScript:

// Modifiers	Description
// [abc]	Find any of the character inside the brackets
// [0-9]	Find any of the digits between the brackets 0 to 9
// (x/y)	Find any of the alternatives between x or y separated with |
// Regular Expression Patterns :Metacharacters are characters with a special meaning. Some of the metacharacters that are allowed in JavaScript:

// Metacharacters	Description
// .	This is used for finding a single character, except newline or line terminator
// \d	This is used to find a digit.
// \s	This is used to find a whitespace character
// \uxxxx	This is used to find the Unicode character specified by the hexadecimal number xxxxx
// Quantifiers define quantities. They provide the minimum number of instances of a character, group, or character class in the input required to find a match. Some of the quantifiers allowed in JavaScript are:

// Quantifiers	Description
// n+	This is used to match any string that contains at least one n
// n*	This is used to match any string that contains zero or more occurrences of n
// n?	This is used to matches any string that contains zero or one occurrences of n
// n{x}	This is used for matching strings that contain a sequence of X n’s
// ^n	This is used for matching strings with n in the first place
// Here is an example to help you understand regular expression better.


  // Program to validate the email address
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/g; // Regex pattern for email
  
    let result = re.test(email); // check if the email is valid
    if (result) {
      console.log("The email is valid.");
    } else {
      let newEmail = prompt("Enter a valid email:");
      validateEmail(newEmail);
    }
  }
  // Take input
  let email = prompt("Enter an email: ");
  validateEmail(email);
// Data Transformation: Data transformation is the process of converting data from one format to another. Data Transformation in JavaScript can be done with the usage of higher-order functions which can accept one or more functions as inputs and return a function as the result. All higher-order functions that take a function as input are map(), filter(), and reduce().

// Method	Description	Syntax
// map()	The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. map() is a non-mutating method used to iterate over an array and calling function on every element of array.	array.map(function(currentValue, index, arr), thisValue)
// filter()	The arr.filter() method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a given condition or criteria.	array.filter(callback(element, index, arr), thisValue)
// reduce()	The arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.	array.reduce( function(total, currentValue, currentIndex, arr),
// initialValue )

    const num = [16, 25];
      
    /* Using JS map() Method */
    document.getElementById("demo")
    .innerHTML = num.map(Math.sqrt);
  
    const ages = [19, 37, 16, 42];
      
    /* Using JS filter() Method */
    document.getElementById("demo1")
    .innerHTML = ages.filter(checkAdult);
  
    function checkAdult(age) {
      return age >= 18;
    }
      
    /* Using JS reduce() Method */
    const numbers = [165, 84, 35];
    document.getElementById("demo2")
    .innerHTML = numbers.reduce(myFunc);
  
    function myFunc(total, num) {
      return total - num;
    }
// Date objects: The Date object is an inbuilt datatype of JavaScript language. It is used to deal with and change dates and times. There are four different way to declare a date, the basic things is that the date objects are created by the new Date() operator.
// Syntax:

new Date()
new Date(milliseconds)
new Date(dataString)
new Date(year, month, date, hour, minute, second, millisecond)
// There are various methods in JavaScript used to get date and time values or create custom date objects. Some of these methods are:

// Method	Description
// getDate()	This is used to return the month’s day as a number (1-31)
// getTime()	This is used to get the milliseconds since January 1, 1970
// getMinutes()	This is used to return the current minute (0-59)
// getFullYear()	This is used to return the current year as a four-digit value (yyyy)
// getDay()	This is used to return a number representing the weekday (0-6) to
// parse()	This is used to return the number of milliseconds since January 1, 1970 from a string representation of a date.
// setDate()	Returns the current date as a number (1-31)
// setTime()	This is used to set the time (milliseconds since January 1, 1970)

  // Here a date has been assigned by creating a date obj
  var DateObj = new Date("October 13, 1996 05:35:32");
  
  // getDate()
  var A = DateObj.getDate();
  
  // Printing date of the month
  console.log(A + "</br>");
  
  // getTime()
  var B = DateObj.getTime();
  
  // Printing time in milliseconds.
  console.log(B + "</br>");
  
  // getMinutes()
  var minutes = DateObj.getMinutes();
  
  // Printing minute.
  console.log(minutes + "</br>");
  
  // getFullYear()
  var C = DateObj.getFullYear();
  
  // Printing year
  console.log(C + "</br>");
  
  // getDay()
  var Day = DateObj.getDay();
  
  // Printing day of the week
  console.log("Number of Day: " + Day + "</br>");
  
  // setDate
  dateobj.setDate(15);
  
  var D = DateObj.getDate();
  
  // Printing new date of the month
  console.log(D);
  
  // parse(), taking wrong date string as input.
  var date = "February 48, 2018 12:30 PM";
  
  // calling parse function.
  var msec = Date.parse(date);
  console.log(msec);
// DOM: DOM stands for Document Object Model. It defines the logical structure of documents and the way a document is accessed and manipulated. JavaScript can not understand the tags in HTML document but can understand objects in DOM. There are many different ways to build and alter HTML elements with JavaScript called nodes. Below are some of the methods provided by JavaScript to manipulate these nodes and their attributes in the DOM:

// Method	Description
// appendChild()	It adds a new child node as the last child node to an element.
// cloneNode()	It is a function that duplicates an HTML element.
// hasAttributes()	It returns true If an element has any attributes otherwise, it returns false.
// removeChild()	It removes a child node from an element using the Child() method.
// getAttribute()	It returns the value of an element node’s provided attribute.
// getElemetsByTagName()	It returns a list of all child elements whose tag name is supplied.
// isEqualNode()	It determines whether two elements are the same.

    function geeks() {
      var node = document.createElement("P");
      var t = document.createTextNode("GeeksforGeeks");
      node.appendChild(t);
      document.getElementById("sudo").appendChild(node);
    }
    function nClone() {
      // Accessing div attribute using a variable geek
      var geek = document.getElementsByTagName("DIV")[0];
   
      // Cloning geek variable into a variable named clone
      var clone = geek.cloneNode(true);
   
      // Adding our clone variable to end of the document
      document.body.appendChild(clone);
    }
    function hasAttr() {
      var s = document.body.hasAttributes();
      document.getElementById("gfg").innerHTML = s;
    }
   
    function Geeks() {
      var doc = document.getElementById("listitem");
      doc.removeChild(doc.childNodes[0]);
    }
   
    /* Using getElementById */
    function getAttr() {
      var rk = document.getElementById("button").getAttribute("onClick");
      document.getElementById("gfg1").innerHTML = rk;
    }
      
    /* Using getElementsByTagName */
    function getElement() {
      var doc = document.getElementsByTagName("p");
      doc[0].style.background = "green";
      doc[0].style.color = "white";
    }
      
    /* Cheacking the equality */
    function isequal() {
      var out = document.getElementById("result");
      var divele = document.getElementsByTagName("div");
      out.innerHTML +=
        "element 1 equals element 1: " +
        divele[0].isEqualNode(divele[0]) +
        "<br/>";
      out.innerHTML +=
        "element 1 equals element 2: " +
        divele[0].isEqualNode(divele[1]) +
        "<br/>";
      out.innerHTML +=
        "element 1 equals element 3: " +
        divele[0].isEqualNode(divele[2]) +
        "<br/>";
    }
// Numbers and Math: JavaScript provides various properties and methods to deal with Numbers and Maths.

// Number Properties include MAX value, MIN value, NAN(not a number), negative infinity , positive infinity etc. Some of the methods in JavaScript to deal with numbers are:

// Method	Description
// valueOf()	It returns a number in its original form.
// toString()	It returns a string representation of an integer.
// toFixed()	It Returns a number’s string with a specified number of decimals.
// toPricision()	It converts a number to a string of a specified length.
// toExponential()	It returns a rounded number written in exponential notation as a string.

  var num = 213;
  var num1 = 213.3456711;
  
  // JS valueof() Method
  console.log("Output : " + num.valueOf() + "</br>");
  
  // JS tostring() Method
  console.log("Output : " + num.toString(2) + "</br>");
  
  // JS tofixed() Method
  console.log("Output : " + num1.toString(2) + "</br>");
  
  // JS topricision() Method
  console.log("Output : " + num1.toPrecision(3) + "</br>");
  
  // JS toexponential() Method
  console.log("Output : " + num1.toExponential(4) + "</br>");
// Javascript provides math object which is used to perform mathematical operations on numbers. There are many math object properties which include euler’s number, PI, square root, logarithm. Some of the methods in JavaScript to deal with math properties are:

// Method	Description
// max(x,y,z…n)	It Returns the highest-valued number
// min(x,y,z…n)	It returns the lowest-valued number
// exp(x)	It returns x’s exponential value.
// log(x)	It returns the natural logarithm (base E) of x.
// sqrt(x)	It returns x’s square root value.
// pow(x,y)	It returns the value of x to the power of y
// round(x)	It rounds the value of x to the nearest integer
// sin(x)	It returns the sine value of x(x is in radians).
// tan(x)	It returns the angle’s(x) tangent value.

//    document.getElementById("GFG").innerHTML =
//        "Math.LN10: " + Math.LN10 + "<br>" +
//        "Math.LOG2E: " + Math.LOG2E + "<br>" +
//        "Math.Log10E: " + Math.LOG10E + "<br>" +
//        "Math.SQRT2: " + Math.SQRT2 + "<br>" +
//        "Math.SQRT1_2: " + Math.SQRT1_2 + "<br>" +
//        "Math.LN2: " + Math.LN2 + "<br>" +
//        "Math.E: " + Math.E + "<br>" +
//        "Math.round: " + Math.round(5.8) + "<br>" +
//        "Math.PI: " + Math.PI + "<br>" +
//        "
//    <p><b>Math.sin(90 * Math.PI / 180):</b> " +
//        Math.sin(90 * Math.PI / 180) + "</p>
//    " +
//        "
//    <p><b>Math.tan(90 * Math.PI / 180):</b> " +
//        Math.tan(90 * Math.PI / 180) + "</p>
//    " +
//        "
//    <p><b>Math.max(0, 150, 30, 20, -8, -200):</b> " +
//        Math.max(0, 150, 30, 20, -8, -200) + "</p>
//    " +
//        "
//    <p><b>Math.min(0, 150, 30, 20, -8, -200):</b> " +
//        Math.min(0, 150, 30, 20, -8, -200) + "</p>
//    " +
//        "
//    <p><b>Math.pow(3,4):</b> " + Math.pow(3, 4) + "</p>
//    ";
// Events: Javascript has events to provide a dynamic interface to a webpage. When a user or browser manipulates the page events occur. These events are hooked to elements in the Document Object Model(DOM). Some of the events supported by JavaScript:

// Events	Description
// onclick()	This is a mouse event. When a user clicks on an element, an event is triggered.
// onkeyup()	This event is a keyboard event and executes instructions whenever a key is released after pressing.
// onmouseover()	This mouse event corresponds to hovering the mouse pointer over the element and its children
// onmouseout()	This event is triggered when the user moves the mouse cursor away from an element or one of its descendants.
// onchange()	This event detects the change in value of any element listing to this event.
// onload()	When an element is loaded completely, this event is evoked.
// onfocus()	This event is triggered when an aspect is brought into focus.
// onblur()	This event is evoked when an element loses focus.
// onsubmit()	This event in invoked when a form is filled out and submitted.
// ondrag()	This event is invoked when an element is dragged.

    function hiThere() {
      alert("Hi there!");
    }
    function focused() {
      var e = document.getElementById("inp");
      if (confirm("Got it?")) {
        e.blur();
      }
    }
      
    /* Mouseover event */
    document.getElementById("hID").addEventListener("mouseover", over);
      
    /* Mouseoout event */
    document.getElementById("hID").addEventListener("mouseout", out);
      
    /* Over on green */
    function over() {
      document.getElementById("hID").style.color = "green";
    }
      
    /* Leaving Out Black */
    function out() {
      document.getElementById("hID").style.color = "black";
    }
  
    function Geeks() {
      var x = document.getElementById("GFG").value;
      document.getElementById("sudo").innerHTML = "Selected Subject: " + x;
    }
  
    /* Success alert */
    function Geek() {
      alert("Form submitted successfully.");
    }
    function Function() {
      document.getElementById("geeks").style.fontSize = "30px";
      document.getElementById("geeks").style.color = "green";
    }
// Error: When executing JavaScript code, errors will most definitely occur when the JavaScript engine encounters a syntactically invalid code. These errors can occur due to the fault from the programmer’s side or the input is wrong or even if there is a problem with the logic of the program. Javascript has a few statements to deal with these errors:

// Statement	Description
// try	This statement lets you test a block of code to check for errors.
// catch	This statement lets you handle the error if any are present.
// throw	This statement lets you make your own errors.
// finally	This statement lets you execute code, after try and catch.

    function myFunction() {
      const message = document.getElementById("p01");
      message.innerHTML = "";
      let x = document.getElementById("demo").value;
  
      /* Using try.. catch.. with conditions*/
      try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 20) throw "is too high";
        if (x <= 20) throw "is too low";
      } catch (err) {
        message.innerHTML = "Input " + err;
      } finally {
        document.getElementById("demo").value = "";
      }
    }
// Window Properties: The window object is the topmost object of DOM hierarchy. Whenever a window appears on the screen to display the contents of document, the window object is created. To access the properties of the window object, you will specify object name followed by a period symbol (.) and the property name.

// Syntax:

// window.property_name
// The properties and methods of Window object that are commonly used are listed in the below tables:

// Property	Description
// window	It returns the current window or frame.
// screen	Returns the window’s Screen object.
// toolbar	It will result the toolbar object, whose visibility can be toggled in the window.
// Navigator	Returns the window’s Navigator object.
// frames[]	Returns all <iframe> elements in the current window.
// document	It returns a reference to the document object of that window
// closed	It holds a Boolean value that represents whether the window is closed or not.
// length	It represents the number of frames in the current window.
// History	Provides the window’s History object.

    // JS location property
    let origin = window.location.origin;
    document.getElementById("demo").innerHTML = origin;
  
    // JS screen property
    function getResolution() {
      alert("Your screen is: " + screen.width + "x" + screen.height);
    }
  
    // JS toolbar property
    var visible = window.toolbar.visible;
  
    // JS navigator property
    function checkConnectionStatus() {
      if (navigator.onLine) {
        alert("Application is online.");
      } else {
        alert("Application is offline.");
      }
    }
    // JS history property
    function getViews() {
      alert(
        "You've accessed " + history.length + " web pages in this session."
      );
    }
    // JS close property
    let myWindow;
    function closeWin() {
      if (myWindow) {
        myWindow.close();
      }
    }
// Method	Description
// alert()	Shows a message and an OK button in an alert box.
// print()	Prints the current window’s content.
// blur()	Removes the current window’s focus.
// setTimeout()	It calls a function or evaluates an expression after a specified time interval.
// clearTimeout()	Removes the timer that was set with setTimeout()
// setInterval()	Calls a function or evaluates an expression at intervals defined by the user.
// prompt()	Shows a conversation window asking for feedback from the visitor.
// close()	Closes the currently open window.
// focus()	Sets the current window’s focus.
// resizeTo()	Resizes the window to the width and height supplied.

    var gfgWindow;
      
    // Function that open the new Window
    function windowOpen() {
      gfgWindow = window.open(
        "https://www.geeksforgeeks.org/",
        "_blank",
        "width=200, height=200"
      );
    }
      
    // Function that Resize the open Window
    function resizeWin() {
      gfgWindow.resizeTo(400, 400);
      gfgWindow.focus();
    }
      
    // Function that Closes the open Window
    function windowClose() {
      gfgWindow.close();
    }
      
    // Function that blur the open Window
    function windowBlur() {
      gfgWindow.blur();
    }
      
    // Function that focus on open Window
    function windowFocus() {
      gfgWindow.focus();
    }
      
    // Alert function
    function wlcm() {
      alert("Welcome to GeeksforGeeks");
    }
      
    // Prompt function
    function geek() {
      var doc = prompt("Please enter some text", "GeeksforGeeks");
      if (doc != null) {
        document.getElementById("g").innerHTML = "Welcome to " + doc;
      }
    }
      
    // Function setTimeout and clearTimeout
    var t;
    function color() {
      if (document.getElementById("btn").style.color == "blue") {
        document.getElementById("btn").style.color = "green";
      } else {
        document.getElementById("btn").style.color = "blue";
      }
    }
    function fun() {
      t = setTimeout(color, 3000);
    }
    function stop() {
      clearTimeout(t);
    }
// JavaScript is well-known for the development of web pages, and many non-browser environments also use it. You can learn JavaScript from the ground up by following this JavaScript Tutorial and JavaScript Examples.

// We have a similar cheat sheet to help you with HTML & CSS concepts as well. Check it out here HTML Cheat Sheet & CSS Cheat Sheet.

// Learning JavaScript is the key to becoming a good earning front-end developer. We have a self-paced JavaScript course that will help you learn JavaScript and its basics.





