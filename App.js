const Express = require("express");
const request = require("request");
const https = require("https");
const cors = require("cors");
const productlist = require("./model");
const App = Express();
const port = 9000;

App.use(cors());
App.use(Express.json());

App.get("/", (req, res) => {
    res.send("Express Server Running");
});

App.get("/products/search", (req, res) => {
    // productlist.find({ productName: req.param.query }, (err, data) => {
    //     if (err) {
    //         console.log("Error");
    //     } else {
    //         test = JSON.stringify(data);
    //         console.log("Data is : ", test);
    //         res.send(test);
    //     }

    productlist
        .find({ productName: req.param("query") })
        .exec(function (err, data) {
            if (err) {
                console.log(err);
                res.json(500, { message: "error" });
            }
            console.log(data, "found");
            res.status(200).json(data);
        });
});

App.get("/insert", (req, res) => {
    const data = {
        productName: "jhonny",
        productPrice: "69",
        productDescription: "no desc",
        productImage: "invisible",
    };
    productlist.insertMany(data, () => {
        res.send("Data inserted");
        console.log(" record was created");
    });
});

App.listen(port, () => {
    console.log("Server running at port ", port);
});
