'COERCION IMPLICIT AND EXPLICIT LESSON ON: https://betterprogramming.pub/implicit-and-explicit-coercion-in-javascript-b23d0cb1a750'
"QUESTION 30, VARIABLES, COERCION, TYPES:::::::"


`There are two types of coercion in JavaScript:
        +Implicit Coercion: Type conversion is done implicitly by JavaScript.
        +Explicit Coercion: Type conversion is done explicitly in code using the inbuilt functions like Number(), String(), Boolean(), etc.`
let myNum = Number("35");
console.log(`type: ${typeof myNum} value: ${myNum}`);

`Examples of Implicit Coercion`
let operation =  12 + ""    //Output is "12" as number 12 is converted to string "12"
console.log(`  12 + "":  type: ${typeof operation} value: ${operation}`);

let operation2 = 1 + "10";
console.log(`  1 + "1":  type: ${typeof operation2} value: ${operation2}`);

`!!!!!##########IMPLICIT COERCION!!!!!!!1`


`Whenever we pass a different data type as an operand in a numeric expression involving operators like -, *, /, %,
the conversion process is similar to calling the in-built Number function on the operand. 
If the conversion to number isn’t possible, NaN is returned.`
console.log("15" * 2 ); //Output is 30 as string 15 is converted to number 15
console.log("15" - "11"); //Output is 4 as both the strings are converted to number
console.log(undefined + 6); //Output is NaN as undefined could not be converted to number
console.log( null + 25  ); //Output is 25 as null is converted to 0.
console.log(true + true); //Output is 2 as true is converted to number 1.
console.log(false + 10); //Output is 10 as false is converted to number 0.
console.log(10 * [6]); //Output is 60 as [6] is converted to number 6.
console.log(10 * [10, 20]); //Output is NaN as [10, 20] could not be converted to number


`The + operator works differently than the other numerical operators. It can work as 
both concatenation and numerical operator depending on the type of operand passed.`
console.log(12 + ""); //Output is "12" as number 12 is converted to string "12"
console.log( "Hello" + null); //Output is "Hellonull" as null is converted to string "null" );


`Implicit coercion is also done by the if() condition and == operator.`

`Notes:
*Symbol type Cann never coerced imp and explicit to a Number. Only, an explicit string coercion can be applied to a symbol.

`