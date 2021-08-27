function * SaySomething(){
        console.log( "Start the function" );
        yield "1"; 
        console.log(" After pause");
        // return  'jaja';  ///Termina el generador 
        yield '2';  //With return it will be never executed cause the return 
        console.log(" After return");
        yield '3';
}

const myGenerator =  SaySomething()

 console.log( myGenerator.next().value ) ;
 console.log( myGenerator.next().value ) ;
 console.log( myGenerator.next().value ) ;

