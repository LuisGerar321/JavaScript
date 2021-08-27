const jsObject  = [ {isb: "1w", price: "33"}, {isb: "2w", price: "43"}, {isb: "3w", price: "5"}]

for(let index = 0; index < jsObject.length; index++){
        console.log( jsObject[index]["isb"]);
}