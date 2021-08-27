"use strict";

/*

// Using this implementation takes a lot of time because freezed the web browser
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
        console.log(primes);
        const output = document.getElementById("output");
        output.innerText = primes.join(", ");
}

*/

const primeWorker = new Worker("./worker.js");
primeWorker.onmessage = function(event) {
        // The response
        const primes = event.data; 

        console.log(primes);
        const output = document.getElementById("output");
        output.innerText = primes.join(", ");
}
function startPrimesCalculation(){
        primeWorker.postMessage("calculate");
}

function spin(){
        const spinner = document.getElementById("spinner");
        let angle = 0;
        setInterval(() =>{
                angle++;
                spinner.style.transform = `rotate(${angle}deg)`;

        }, 20);
}
spin();