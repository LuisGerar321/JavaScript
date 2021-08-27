const userObj1 = {
        id: 1,
        name: "Carlos",
        toString: function(){
                return `[User id: ${this.id}][User name: ${this.name}]`;
        },
}
const userObj2 = {
        id: 2,
        name: "Luis",
        toString: function(){
                return `[User id: ${this.id}][User name: ${this.name}]`;
        },
        valueOf: function (){
                return this.id;
        },
        saludo: function (){
                return "haha"
        },
}

const userObj3 = {
        id: 3,
        name: "Israel",
}

let userArray = new Array(userObj1, userObj2);
userArray.forEach((user, index) => {
        console.log("[index=" + index + "]" + user );
});

console.log(  userObj3.toString()  );