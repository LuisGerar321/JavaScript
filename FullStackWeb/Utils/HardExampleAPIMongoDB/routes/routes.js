//This file is responsable for routing the reques that comes from the server

const express = require("express");
const router = express.Router();
const signUpTemplateCopy =  require("../models/SignUpModels.js")
const path = require("path");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use( bodyParser.urlencoded({extended: true}) );






router.get("/", (request, response) => {
    /*response.send("Express is working");*/
    /*response.sendFile(path.join(__dirname, "../../"));*/
    response.sendFile( path.join( __dirname,  "../index.html") );
});

router.post("/postUser", (request, response) => {
    console.log(request.body);
    const signUpUser  =  new signUpTemplateCopy({
        fullName: request.body.fullName,
        userName: request.body.userName,
        email: request.body.email,
        password:  request.body.password
    })
    /*console.log("SigUser requested : ", signUpUser);*/
    signUpUser.save();
    response.redirect("/");
})

router.route("/getUser").get(
    (req,res) => {
        signUpTemplateCopy.findOne({}, {}, { sort: { 'created_at' : -1 } }, (err,result) => {
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
                console.log(result);
                /*console.log(result.length);*/
/*                for( key in result ){
                    console.log(result[key].sku);
                }*/
            }
        });
        /*res.redirect("/");*/
    }

);

module.exports = router
