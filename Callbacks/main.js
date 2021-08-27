// Callback example
const person = {
        name: "Pedro",
        getThis(callback){
                callback(this);
        }
};

function callback(values){
        console.log("Callback Ouput: ",values);
}

person.getThis(callback);


//Async example//
const posts = [
        {title: "Post 1", body: "This is post one"},
        {title: "Post 2", body: "This is post two"}
];

function getPost(){
        setTimeout( ()=>{
                let output = '';
                posts.forEach(element => {
                        output +=  `<li>${element.title}</li>`;  
                });
                document.body.innerHTML = output;
        }, 1000);
}

function createPost(post, cb1){
        setTimeout(() =>{
                posts.push(post);
                getPost();
        }, 2000);
}


// getPost();
createPost({title: "Post 3", body: "This is post three"}, getPost );


