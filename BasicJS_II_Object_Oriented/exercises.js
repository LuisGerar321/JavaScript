/**
  * Description:
  * Write a function "omit" that given an input object, you can send a list of
  * parameters (any amount) and omit those properties from the object.
  * You need to return a new object!
  *
  * Expected Input: ({ a: 1, b: 2, c: 3 }, 'a', 'b', 'd')
  * Expected Output: { c: 3 }
  * @param {Object} object - Any object to transform into array
  * @returns {Array} - a deep array
*/

function omit() {
    var obj=  arguments[0];
    const localArgumets =  [...arguments];
    localArgumets.shift();
    return Object.keys( obj).reduce( (accum = {},  key  ) =>{
        if( !localArgumets.includes(key)  ){
            accum = { ...accum,  [key]: obj[key]}
        }
        return accum;
    }, {})
}

console.log( omit({ a: 1, b: 2, c: 3 },  "a", "b", "d") );

/**
 * Description:
 * Write a function isObject to determine if the input is a valid object {...} JSON like
 *
 * Expected Input: ({ a: 1 }), (1)
 * Expected Output: true, false
 */

function isObject(input) {

    if( (input instanceof Object) && JSON.stringify(input) ) {
        return true;
    }else{
        return false;
    };

}
console.log( isObject( { a: 1 } )  );
console.log( isObject(  (1) )  );
console.log( isObject(  function(){} )  );
/**
 * Description:
 * Developers have the following array of error messages to handle API errors. They need a function
 * in which they can send an object from the array, and also, they can send the HTTP code of the error.
 * This is because, depending on the behavior, the same message can be used with different codes.
 * For example, Unauthorized can be used with 401 or 403 (they obviously need a refactor there!)
 * Help them just writing the function that can return an object with the error message, and the code.
 * Also, use the "codes" object to validate that developers are using a valid code for an error object
 * (at least they have this validations...). Throw an error if an invalid code is used.
 *
 * Expected Input: ({ message: 'Unauthorized', code: 'err3' }, 403)
 * Expected output: {
 *  "message": "Unauthorized",
 *  "code": err3,
 *  "httpCode": 403
 * }
 */

 const codes = {
   err1: [400, 404],
   err2: [400, 409],
   err3: [401, 403],
 };

 const errors = [
   {
     message: 'Unable to find the resource in the database',
     code: 'err1',
   },
   {
     message: 'Data in the server has conflicts',
     code: 'err2',
   },
   {
     message: 'Unauthorized',
     code: 'err3',
   },
 ];

function isErrorCodeValid(code, error){
    return code.includes(error)
}

 function sendApiError(errorObject, code) {
    if( isErrorCodeValid(codes[errorObject.code], code) ){
        return {...errorObject, ["httpCode"]:  code }
    }else{
        throw new Error("Error is not valide");
    }
};

console.log(sendApiError( errors[2], 403));
console.log(sendApiError( errors[2], 400));
