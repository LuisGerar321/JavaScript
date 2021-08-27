/*
Given the array of items 'myArray' and the function 'myFunction' need to make a console log per each item that has
a duplicated ID to any other from the array, as well as retrieve a full list of duplicated IDs.
THE PROGRAM IS DOING THAT ALREADY BUT IS POORLY WRITTEN CODE
TASK 1: Clean the code by SPLITTING the callbacks received in the functions and separate them into different functions.
TASK 2: Change the code and functions to be async or promises, concatenated to get the full duplicated IDs
*/
// ============================================================

const myArray = [
  {
    name: "item1",
    id: "d912bf34",
  },
  {
    name: "item2",
    id: "58a4737e",
  },
  {
    name: "item3",
    id: "f569d7ca",
  },
  {
    name: "item4",
    id: "c791349d",
  },
  {
    name: "item5",
    id: "43487aa8",
  },
  {
    name: "item6",
    id: "c791349d",
  },
  {
    name: "item7",
    id: "d912bf34",
  },
];

const duplicatedIds = [];

const myFunction = (array, cb1) => {
  array.reduce((acc, item) => {
    if (acc[item.id]) {
      cb1(item.id, (duplicated) => duplicatedIds.push(duplicated));
    }
    return { ...acc, [item.id]: true };
  }, {});
};

myFunction(myArray, (duplicated, cb2) => {
  console.log(duplicated);
  cb2(duplicated);
});

console.log(duplicatedIds);


// ============================================================ YOUR RESULT AFTER THIS LINE
// You can change the name of the functions or comment the previous ones.
console.log("----Solutions Task 1---");
/*TASK 1*/
const _duplicatedIds = [];
const _myFunction = (array, cb1) =>{
    array.reduce( (acc, item)=>{
        if(acc[item.id]){
            cb1(item.id, callbackInner2);
        }
        return {...acc,  [item.id]: true};
    }, {});
};
function callbackInner1(duplicaded, cb2){
    console.log(duplicaded);
    cb2(duplicaded);
};
function callbackInner2(duplicaded){
    _duplicatedIds.push(duplicaded);
};
_myFunction(myArray, callbackInner1)
console.log(_duplicatedIds);
// ////////////// Async ///////////////
console.log("----Solutions Task 2---");
const _DuplicateIds = [];
const _MyFunction = async (array, cb1, showData) =>{
    var acc = {};
    for(let element of array ){
        if(acc[element.id]){
            await cb1(element.id, CallbackInner2);
        }
        acc  = {...acc,  [element.id]: true};
    }
    showData(_DuplicateIds);
    // Por alguna razon, no jala en reduce :(
    // array.reduce( (acc, item)=>{
    //     if(acc[item.id]){
    //         await cb1(item.id, callbackInner2).then(()=> true);
    //     }
    //     return {...acc,  [item.id]: true};
    // }, {});
}
function _CallbackInner1(duplicaded, cb2){
    return new Promise( (resolve) => {
        setTimeout(()=> {
            console.log(duplicaded);
            resolve(duplicaded);
        } , 1000);
    }).then(  (duplicaded) =>  { cb2(duplicaded)  } );
};
function CallbackInner2(duplicaded){
    _DuplicateIds.push(duplicaded);
};
_MyFunction(myArray, _CallbackInner1,  ()=>  {console.log(_DuplicateIds) }     );
