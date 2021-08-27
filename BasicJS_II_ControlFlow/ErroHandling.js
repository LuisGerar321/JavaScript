/*Function*/

function divideTwoNumbers(divided, divisor){


    if(arguments.length < 2  ){ /*1)*/
        throw new RangeError("The expected parameters are not received");
    }else if( typeof divided !== "number" || typeof divisor !== "number"  ){ /*2)*/
        throw new TypeError("The expected parameters are not numbers");
    }else if(divisor == 0 ){ /*3)*/
        throw new TypeError("Division is by zero"); /*4)*/
    }else if( (divided<0 || divided>2000) || (divisor<0 || divisor>2000)  ){
        throw new TypeError("The range of the parameters should be positives and not exceed 2000.");
    }else{
        return divided/divisor;
    }

};

/*Testing process*/

try{
    divideTwoNumbers(3000, 250);
}catch(error){
    console.log(error);

};

try{
    divideTwoNumbers(100, 0);

}catch(error){
    console.log(error);

};

try{
    divideTwoNumbers(3, '4');
}catch(error){
    console.log(error);

};
