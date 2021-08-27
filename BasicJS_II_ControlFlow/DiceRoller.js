
/*1) Write a function named getDiceRoll which returns the value of one rolled dice. It has one argument.
The argument allows you to supply the number of rolls. Default value of argument is 1.*/

function getDiceRoll(number_roll = 1){
    //Throwing the Roll Dice once with a cost of 1:
    var value = Math.ceil(Math.random()*6);
    number_roll--; //Cost = 1;
    /* If If u have more chanses to get a new roll dice, u wul call itself again.
    Otherwise get stock and return value*/
    return number_roll > 0 ? getDiceRoll(number_roll) : value;
}

/*For items from 2 to 7 write the result of executing the line of code indicated with ">".*/

/*2) Express the data type*/
/* Result: "function" */

/*3) Express the return value data type. Note that a function name with parentheses is used:
    > typeof getDiceRoll()*/
/* Result: "number" */

/*4) Invoke the function using the following code:
    > getDiceRoll()*/
/* Result: 4 */

/*5) Invoke the function in a math expression:
    > 100 * getDiceRoll()*/
/* Result: 300 */


/*6) Invoke the function in a comparison expression:
    > getDiceRoll() == 4*/
/* Result: false */

/*7) Invoke and supply the argument for the number of dice to roll as 2:
> getDiceRoll(2)*/
/* Result: 4 */
