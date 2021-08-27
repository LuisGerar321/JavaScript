const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();

app.use( bodyParser.urlencoded({extended: true}) );

mongoose.connect("mongodb+srv://aaaaa:3waaaaaaaWN@cluster0.jare8.mongodb.net/productsDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.connection.on("error", function(error) {
  console.log(error)
});

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    sku: String,
    name: String
});

const Product = mongoose.model("Product", productsSchema );

app.post("/", (req,res) => {
    let newProduct = new Product({
        sku: req.body.sku,
        name: req.body.name
    });

    console.log( newProduct);

    newProduct.save( error => {
        if(error){
            console.log("wow, easy peacy, something went wrong!!");
        }
        else {
            console.log("Data saved !!");
        }
    });
    res.redirect("/");
});



app.use("/", router);

router.get("/", (req, res) => {
    res.sendFile( __dirname + "/index.html");
        Product.find({}, (err,result) => {
            if(err){
                res.send(err);
            }
            else{
                console.log(result);
                console.log(result.length);
                for( key in result ){
                    console.log(result[key].sku);
                }
            }
        });
});

router.route("/api/v1/getProducts").get(
    (req,res) => {
        Product.find({}, (err,result) => {
            if(err){
                res.send(err);
            }
            else{
                res.send(result);
            }
        });
    }
);


app.listen("3000", function() {
    console.log("Server listing on port 3000");
});
