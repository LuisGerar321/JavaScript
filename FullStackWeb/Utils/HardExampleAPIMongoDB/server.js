const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const signUpTemplateCopy =  require("./models/SignUpModels.js")
const bodyParser = require("body-parser");
const routesUrls = require("./routes/routes")

app.use( bodyParser.urlencoded({extended: true}) );

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true, useUnifiedTopology: true
});

mongoose.connection.on("error", function(error) {
  console.log(error)
});


app.use("/",  routesUrls) //To connect the rountes to catch the response.

app.listen(4000, () => console.log("Server is up and running"))
