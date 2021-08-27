function * fibonasi( start  =0, end =10){
        let current = 0;
        let next =  1;
        while(true){
                let reset = yield current;
                [current , next  ] =  [ next, next + current ];

                if(reset){
                        current = 0;
                        next = 1;
                }
                 
        }
        return;
}


const myGenerator  =  fibonasi();

console.log( myGenerator.next().value );
console.log( myGenerator.next().value );
console.log( myGenerator.next().value );
console.log( myGenerator.next().value );
console.log( myGenerator.next().value );
console.log( myGenerator.next().value );