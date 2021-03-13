const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/ecommerce",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log("Error Connecting MongoDB");
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productDescription: { type: String, required: true },
    productImage: { type: String, required: true },
});

module.exports = mongoose.model("productlists", productSchema);
// module.exports = mongoose.model("productlist", productSchema);
