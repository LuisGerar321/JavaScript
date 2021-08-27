/*Scope*/
var pi = Math.PI;

function getCircleFunctions(diameter){
    var radio =  diameter/2;
    var circleFunctions = {
        getArea : getArea,
        getPerimeter :  getPerimeter
    };

    function getArea(){
        var area = radio*pi;
        return area;
    };

    function getPerimeter(){
        var perimeter = 2*pi*radio
        return perimeter;
    };
    return circleFunctions;

}
var sunProperty = getCircleFunctions(6);

console.log( sunProperty.getArea());
console.log( sunProperty.getPerimeter());

/*THIS*/
var color = "hola";
const vehicle  =  {
    make: "Audi",
    model: "RS7",
    color:  "Blue",
    getColor : function(){
        var getColor =  ()=>this.color;
        return getColor();
    }
    /*   Using an arrow function as a property to the vehicle object called getColor return return the color of the object in context using the this keyword.*/
    /*    getColor : () => {return this.color}, // Cannot be acessed just with color!//
        Why?
            I dont remenber this trick :S
        getColorFun : function (){
            console.log(this.color);
        },*/
        /*This works fine but, Does is it the appropiate way to solve that ?*/
};

function getVehicleDetails(){
    return `This car is a ${this.make} ${this.model}`
};

vehicle.getVehicleDetails =  getVehicleDetails;
console.log(vehicle.getVehicleDetails());
console.log(vehicle.getColor());

const myCustomVehicle = {make: 'jeep', model: 2015, color: 'gray'};

console.log(vehicle.getVehicleDetails.call(myCustomVehicle));
console.log(vehicle.getColor.call(myCustomVehicle));



var firstName = "Luis Camara";
const person = {
    firstName : "Tyler",
    getName(){
        console.log(` ${this.firstName} is my name`);
    }

};

setInterval(  person.getName , 2000);
