function  avg() {
        var prev_num =  0;
        var n_call  =  1;
        return function getAvg( num ) { 
                
                total  = ((prev_num +  num)/n_call  );
                n_call++;
                prev_num += num;
                return total;
                
        }
}


const myAvg = avg ();

console.log(   myAvg(10) );
console.log(   myAvg(11) );
console.log(   myAvg(12) );

console.log(typeof ('1' + 1));