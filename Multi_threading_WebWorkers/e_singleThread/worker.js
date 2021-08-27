"use strict";



const N_PRIMES = 10000;
// Prime numbers are whole numbers greater than 1, that have only two factors
// 1 and the number itself. Prime numbers are divisible only by the number 1 or itself 
function calculatePrimes(){
        let current = 2;
        const primes = [];
        while(primes.length <  N_PRIMES){
                let isPrime = true;
                for(let i=2;  i<current; i++){
                        if(current%i === 0){
                                isPrime=false;
                                break;
                        }
                }
                if(isPrime){
                        primes.push(current);

                }
                current = current + 1;
                
        }
        // console.log(primes);
        // const output = document.getElementById("output");
        // output.innerText = primes.join(", ");

        // As far as Web Workers dont have DOM communication the only way to 
        // communicate with the code is returned a post message
        postMessage(primes); 
        // the response
}

onmessage = function(event){
        if(event.data === "calculate"){
                calculatePrimes();
        }
}
