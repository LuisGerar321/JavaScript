function isLucky(n) {
    const Snum =  String(n);
    //Dividir
    const right =  [   ...Snum.slice( (Snum.length)/2 , Snum.length).split("")  ].reduce(  ( sum =  0,            element ) => {
        return sum += element;
    }, 0 );
    const left  =  [   ...Snum.slice( 0  , (Snum.length)/2).split("") ].reduce(  ( sum =  0, element ) => {
        return sum += element;
    }, 0 );

    return  left === right ?  true : false;
}
