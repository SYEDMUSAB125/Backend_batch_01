const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/amazon")
const Schema = mongoose.Schema({
    name: String,
    age: Number,
    email: String
})
const ProductModal = mongoose.model("videos", Schema)
async function  saveInDb(){
    const product = new ProductModal({
        name: "Samsung",
        age: 22,
        email: "syedmasab125@gmail.com",
    company : "Ncai"
    })
        const result = await product.save()
        console.log(result)
}
saveInDb()