function CreateCounter(){
    let count = 0

    return function IncrementCount(){
        count += 1;
        return count;
    };
}

const  count1  =  CreateCounter();

/*console.log(count1());*/


function CreateCounterArrow(){
    var counter = 0;
    return ()=>{return counter+=10};
}


const countArrow =  CreateCounterArrow();
/*console.log( countArrow() );
console.log( countArrow() );
console.log( countArrow() );*/

//There are not differences with  arrow function and function in this scope.

function CreateObjClousures(){
    let counter =  0;
    return {
        incrementCounter : () => {return counter += 1},
        getCounter : ()  =>  { return counter},
        setCounter : (value) =>  { return counter = value}
    }
}

const myCounter = CreateObjClousures();

console.log(myCounter.getCounter());
myCounter.setCounter( 1000);
console.log(myCounter.getCounter());
/*console.log(myCounter.incrementCounter());*/
