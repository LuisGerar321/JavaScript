const fetch = require("node-fetch")




let url = "http://localhost:4000/getUser";
fetch(url)
    .then(res => res.text())
    .then(text => console.log(text))
