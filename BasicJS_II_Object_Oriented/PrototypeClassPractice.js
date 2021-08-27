//Prototype de un objeto es la referencia a otro objeto
//Puede ser null o no exitir.
//Cuando creo una funcion new se le asigna un prototype que no tien
//Nada que ver.

/*function Foo(name){
    this.name = name
}*/

/*console.log(  Object.getOwnPropertyDescriptor(Foo,'prototype'));*/

//Cuando invoco con new va a linkear el prototype de la funcion (Su contexto)
// Con esa misma variable.

/*const a = new Foo('Luis');
console.log( Object.getPrototypeOf(a) === Foo.prototype );
console.log( a.prototype === Foo.prototype );*/

/*a se ligo con el prototype de Foo, esto me permite que
los objetos se liguen, permiendome crear metodos para
Foo prototype donde cualquier variable linkeada a esa
proto pueda acceder.
This is how its look
Foo.prototype <--a,b,c,etc.
*/

/*Foo.prototype.myName = function(){
    return ` My name is  ${this.name}`
}*/

/*Duda1: Si ambos objetos estan apuntando al mismo prototype
entonces, en teoria todos deberian tener el mismo valor
cuando se les modifica, no iguales?
*/

/*const b = new Foo("Josue");
const c = new Foo("Carlitos");
console.log(b.myName() );
console.log(c.myName());*/

/*Importante: Los constructores cuando haces instancia
haces una inicializacion. So, Nuestra funcion le demos el
funcionamiento de contructor
function Foo(name){ //Ojo: Solo es unicamente para dar charac y ambiente
    this.name = name
}
Constructor = function with new
Methods with function.prototype.method

*/

/*
tittle: Prototype inheritance
description: show an example
*/

//Constructor
function Foo(name){
    this.name = name;
};
//Creating methods
Foo.prototype.SayMyName = function(){
    return `Tu name is ${this.name}`
};

/*Creating another class function
and Executing Super to inheritance fron Foo */
function Bar(name, label){
    /*Super call the constructor of Foo and pass argument */
    Foo.call(this,name); /*explicit binging taking Bar context*/
    /*Just the constructor of bar     */
    this.label = label;
}
console.log(Bar.prototype);
//Extend//
/*Duda 2: Por que no asignar solamente Foo Object.create(Foo)
Como lo asignabamos en los objetos combensionales
e.i. const  /*objectB = Object.create(objectA);*/


/*Cuando cree un obj de Bar, todo lo que tenga proto de bar
Tambien va a tener  el prototipo de Foo.
*/
Bar.prototype = Object.create(Foo.prototype);
/*Foo.prototype <-[Prototype]- Any BarObject :
Cualquier obj Bar tiene linkeado su prototypo con el potro de Foo
*/

/*Duda 3. Al diff de igualar Bar a el prototypo Foo (como
en el ejemplo de objetos) es que me permite conservar todos los metodos de Bar
para que despues Bar.prototype tenga todos los methos Foo.
De esta manera logro conservar tanto los methods de Bar y de Foo
al mismo tiempo, es correcto?.
 */

console.log(Bar, "-",Bar.prototype);

//Adding more methods
Bar.prototype.myLabel = function (){
    return `You are label to ${this.label}`
}

const barObj = new Bar("Camara", "Obj a Foo");
console.log(barObj.SayMyName());
console.log( barObj.myLabel());
