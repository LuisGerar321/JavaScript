// Make this function work asynchronously (add/delete unnecessaries async awaits)
const verifyUser = async function(username, password){
    try {
       const userInfo = await dataBase.verifyUser(username, password);
       const rolesInfo = dataBase.getRoles(userInfo);
       const logStatus = dataBase.logAccess(userInfo);
       return userInfo;
    }catch (e){
        console.log(e.message);
       //handle errors as needed
    }
};
// add neccessary async await operand on addAsync function to make this code work correctly
function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

addAsync(10).then((sum) => {
    console.log(sum);
});
