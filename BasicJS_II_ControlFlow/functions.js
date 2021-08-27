
function  Greating(strg){
    var name = strg;

    (
        function SayName(){
            console.log(`this:  ${this}: Greating: Hello, I'm  ${name}   `);
        }
    )();
    return this;
}

Greating("Gerardo");
/*console.log(Greating("Luis"));*/
