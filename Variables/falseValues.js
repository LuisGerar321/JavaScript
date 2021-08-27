function displayNotAvailable(arg){
        console.log(`Not available ${arg}`);
}

//Falsy Values (8) data in JS is empty string, null, undefined, NaN, 0, -0, 0n
var user = ``

if(!user){
        displayNotAvailable(user);
}




let duration = 0;
//let duration = '';
let degree = null;

if (duration === 4) {
        degree = "Bachelor";
}else if (duration == ''){  //Coertion type takes as equal '' and 0 as an falsy Value. Use better ===
        degree = "N/A";
}else{
        degree = "Other";
}

console.log( `duration= "${duration}", degree= "${degree}".` );


//More practice Coercion with NULL!!!
// Null just has a corcion --> null == undefined  true (loose equality operator)
// Also null === undefined false

const benefit = null;

if (benefit == '') {
        console.log("Falsy value!");
}
let val1 = 100;
let val2 = "100";
console.log( val1 || val2);

