const myStr = "El método trim( ) elimina.";
// console.log( str );
// var a = str.trim()


console.log( myStr.padEnd(50,'.') );

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(50, '.').substr(0,50));
// expected output: "Breaded Mushrooms........"