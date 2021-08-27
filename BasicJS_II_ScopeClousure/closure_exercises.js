/*
  Description:
  Given an object person, which has firstName, middleName, lastName and age values,
  modify the object to create a closure for EACH of the following cases:
    - It that allows to increase age by exactly one year.
    - It allows you to get the full name
    - It it returns age


*/
const person = {
  firstName: 'Rafael',
  middleName: 'M',
  lastName: 'Rodriguez',
  age: 35

}
function ObjPerson( obj ){
    let person = {...obj};
    return{
        increase:  function(){
            person.age  +=1;
            return person;
        },
        getFullName: function() {
            return `${person.firstName} ${person.middleName} ${person.lastName}`;
        },
        getAge : function (){
            return person.age;
        },
        info: function(){
            return person;
        }
    }
};

const Rafael = ObjPerson(person);
console.log(`This is the full name: ${Rafael.getFullName()}`);
Rafael.increase();
console.log(`This is the age: ${Rafael.getAge()}` );
console.log(person);

/*
  Description:
  The client need a toolkit that allows them to create new pages for his website with customized design, all done directly on a CMS.
  One of the tools will help him change the font size of a DOM element by a given amount of pixels. Create a factory function that returns
  a closure which will manipulate the dom to update the font size to a given value. Make at least 3 functions with 3 different sizes.

  // Expected Input: (10)
  // Expected Output: Function(string)
  //
  // @param {number} | {string}
  // @returns {Function}

*/

// This is the exercise Fixed
function updateSize (size) {
    return function( id){
        var Current_Size  = document.getElementById(id);
        Current_Size.style.fontSize = size;
    }
};
const updateElement40 = updateSize(40);
const updateElementTo120= updateSize(120);
updateElement40("Greetting");
updateElementTo120("Name");
