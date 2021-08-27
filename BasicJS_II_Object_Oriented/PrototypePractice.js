const objectA = {
    a:1
};
Object.defineProperty(objectA, "a2", {
    writable: false,
    enumerable: true,
    value: -1,
})
const  objectB = Object.create(objectA);
objectB.b = 2;

const objectC = Object.create(objectB);
objectC.c = 3;

objectC.a =  0;
/*objectC.a2  = 10; //Will not shadow*/
console.log(objectA, objectB, objectC);


Object.defineProperty( objectC, "a2", {
    value: 20,
    enumerable: true,
})

console.log(objectA, objectB, objectC);
