// Works in Chrome devtools console
function* downToZero (n) { 
        yield n;  // yield "first" element of the "list"
    
        if (n > 0)  // yield each element of the "rest" of the "list"
            for (var n2 of downToZero(n - 1)) 
                yield n2; 
    }
    
    var tenToZero = downToZero(10);
    
    console.log('The first number should be 10:', tenToZero.next().value);
    console.log('The second number should be 9:', tenToZero.next().value);
    console.log('The third number should be 8:', tenToZero.next().value);
    
    console.log('The for-loop below should take off from 7')
    
    for (var number of tenToZero) 
        console.log(number);